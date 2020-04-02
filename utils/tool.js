
function testPhone(a){  //验证手机号
	let ph = /^[1][0-9]{10}$/;
	return ph.test(a)
}

function testCode(a){  //验证验证码
	let ph = /^[1][0-9]{5}$/;
	return ph.test(a)
}
function testPassWord(a){  //验证密码
	let ph =/^[0-9A-Z_!]{6,12}$/;
	return ph.test(a)
}

export default {
	testPhone,
	testCode,
	testPassWord,
}
