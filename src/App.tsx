import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import History from "./components/History";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<div className="main-container">
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/history" element={<History />} />
						<Route path="*" element={<Navigate to="/" />} />
					</Routes>
				</div>
			</BrowserRouter>
		</QueryClientProvider>
	);
}

export default App;
