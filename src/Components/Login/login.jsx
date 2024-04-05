import React from "react";
import { Form, Input, Button } from "antd";
import { LockOutlined, PhoneOutlined } from "@ant-design/icons";
import Logo from "../../assets/Images/Logo.svg";
import { Context } from "../Context/Context";
import "./login.scss";
import { api } from "../utils/api";

const Login = () => {
	const { setToken } = React.useContext(Context);
	const [inputValue, setInputValue] = React.useState("");

	const onFinish = async (values) => {
		const body = values;

		await api.post("/login", body).then((res) => {
			setToken(res.data.access_token);
			console.log(res.data.access_token);
		});

		console.log(body, "dwdq");
	};
	return (
		<div className='container'>
			<div className='form__wr'>
				<Form onFinish={onFinish} id='form'>
					<img
						className='logo'
						src={Logo}
						alt='logo'
						width={300}
						height={50}
					/>
					<h1>Tizimga kirish</h1>
					<Form.Item
						name={"phone"}
						rules={[
							{
								required: true,
								message: "Please input your number!",
							},
						]}
					>
						<Input
							value={inputValue}
							onChange={(e) => setInputValue(e.target.value)}
							className='phone__input'
							size='large'
							autoComplete='false'
							prefix={
								<PhoneOutlined
									style={{ width: "50px", height: "20px" }}
								/>
							}
						/>
					</Form.Item>

					<Form.Item
						name='password'
						rules={[
							{
								required: true,
								message: "Please input your password!",
							},
							{ whitespace: true },
							{ min: 6 },
						]}
					>
						<Input.Password
							className='password__input'
							size='large'
							prefix={<LockOutlined />}
						/>
					</Form.Item>

					<a href='#' className='forget__password'>
						Забыли пароль?
					</a>
					<Button className='btn' type='primary' htmlType='submit'>
						Kirish
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Login;
