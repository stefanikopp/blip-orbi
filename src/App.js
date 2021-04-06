import React, { useEffect } from 'react';
import { BlipChat } from "blip-chat-widget";

const customStyle = `
	.blip-card .bubble.right {
		background-color: #CC2025 !important;
		color: white !important;
	}
	.blip-card .bubble.left {
		color: #606060;
		text-align: left;
		background-color: #e7e7e7 !important;
	}
	.select .options li {
		background-color: white !important;
		color: #CC2025 !important;
		border-color: #CC2025 !important;
	}
	#blip-chat-header {
		background-color: #CC2025 !important;
		visibility:hidden;
	}
	i{
		font-style:normal;
		color: #CC2025;
	}
	#message-input .send-button {
		background-color: #CC2025 !important;
	}
	.blip-card .left a.next, .blip-card .left a.prev{
		color: #CC2025 !important; 
	}
`

function App() {

	useEffect(() => {
	  const windowUrl = window.location.search;
	  const params = new URLSearchParams(windowUrl);
	  const fullName = params.get('name')
	  const email = params.get('email')
  
	  const blipClient = new BlipChat()
	  
	  blipClient
	  	.withAppKey("b3JiaXRlc3RlbW9iaWxlOmI5MDdiNTI4LWYzNjgtNDI3OC1iYzEzLWJkNzM1NWU1YWZiMA==")
		.withButton({ color: "#CC2025" })
		.withCustomStyle(customStyle)
		.withAccount({
		  fullname: fullName,
		  email
		})
		.build();

		blipClient.toogleChat();
	}, [])
  
	return null;
  }
  
  export default App;