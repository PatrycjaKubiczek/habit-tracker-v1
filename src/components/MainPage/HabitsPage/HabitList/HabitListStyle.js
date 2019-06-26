import styled from 'styled-components';

export const StyledCol = styled.div`
padding: 20px;
border: 1px solid #ddd;
margin: 10px -10px; 
background: #fff;
border-radius: 5px;
user-select: none;
box-shadow: 0px 2px 3px rgba(0,0,0,.03), 1px 2px 2px rgba(0,0,0,.03), -1px -2px 2px rgba(0,0,0,.05);

@media screen and (max-width: 769px){
	margin: 10px
}
.col {
	margin: 2px;
	cursor: pointer;
    user-select: none;
    line-height: 30px;
}
.fa {
	display: none
}
.task {
    border-radius: 5px;
    background: #eee;
	// border: 1px solid #28a745;
	width: 30px;
	height: 30px;
	flex: 0 0 30px;
	padding: 0;
	transition: background ease-in-out .09s
	&:hover {
		background: rgb(40, 167, 69, .5);
		color: #000;
	}
}
.taskDone.col{
	color: white;
	background: #28a745;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background: rgb(40, 167, 69, .5);
	}
}
@media (hover: none) {
	.taskDone.col:hover {
		background: #28a745;
	}
}
.habit-title {
	display: inline-block;
	max-width: 80%;
	border: 2px solid transparent;
}
.habit-btns {
	float: right;
	color: #ddd;
}
.input-title {
	margin-left: -7px;
	padding-left: 8px;
	outline: none;
	border: 1px solid #007bff;
	width: 75%;
	font-weight: bold;
	@media screen and (max-width: 769px){
		width: 60%

	}
}
.col__progress {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	@media screen and (max-width: 769px){
		margin-top: 20px

	}
}
.habit__wrap {
	min-width: 245px;
	flex-wrap: wrap;
	alignItems: center;
	display: flex; 
}
.title__wrap {
	text-align: left;
    min-height: 40px;
    border-bottom: 1px solid #ddd;
	margin-bottom: 15px;
}
`