import React from "react";
import axios from "axios";

export const api = axios.create({
	baseURL: "https://dev.api.i-mehmon.uz/api",
});
