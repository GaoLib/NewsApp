import { createGlobalStyle } from 'styled-components'

export const GlobalIconStyle = createGlobalStyle`
	body {
		margin: 0;
		padding: 0;
		font-family: sans-serif;
	}
	.footer{
		position:fixed;
		width:100%;
		bottom:0px;
		display: flex;
		justify-content: space-around;
		background-color: white;
		border-top:1px solid #DCDCDC;
	}
	.icon{
		margin:6px auto;
	}
`;