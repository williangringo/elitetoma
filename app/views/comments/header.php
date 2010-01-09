<html>
<head>
<title>Testing my own MVC</title>
<style>
body {
 margin:10px;
    background-color:#fff;
 color:#666;
 }
p {
    line-height:1.5em;
font: normal normal normal 12px Georgia, serif;
 }

#container {
 margin:10px auto;
width:250px;
}

#addAComment {
border:1px solid #eee;
}

#addAComment:hover {
    background-color:#bcfc3d;
}

#form {
display:none;
}

.id {
    float:right;
}

.name {
    font-style:italic;
    float:left;
padding-right:5px;
}

.time {
    float:left;
}

.text {
clear:both;
padding:10px;
}

.comment {
 font:normal normal normal 12px Georgia, serif;
     background-color:#eee;
 color:#666;
 padding:5px;
 margin:10px 0px;
 }

.comment:hover {
    background-color:#bcfc3d;
 }

input {
color:#666;
    background-color:#fff;
    font-family:georgia,times;
    font-size:14px;
    font-weight:normal;
border:1px solid #ccc;
padding:2px;
}

input:focus {
border:1px solid #bcfc3d;
}

input#addComment {
color:#666;
    background-color:#fff;
border:1px solid #ccc;
}

input#addComment:hover {
    background-color:#bcfc3d;
}

a {
color:#666;
    font-family:georgia,times;
    font-weight:bold;
	text-decoration:none;
}

a:hover {
	border-bottom:1px solid black;
cursor:pointer;
}

h1 {
    font-size:16px;
    letter-spacing:-2px;
    text-align:center;
}

#addAComment h1 {
    font-size:14px;
    letter-spacing:-2px;
    text-align:center;
font-weight:normal;
}
</style>
</head>
<body>
