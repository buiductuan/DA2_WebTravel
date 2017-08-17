
// Đăng nhập [home]
$(function(){

	'use strict'

	$(window).load(function(){
		$("#load-dn").hide();
	});
	$("#btn-dangnhap").click(function(){
		var email= $("#email-dn").val();
		var pass= $("#password-dn").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
		if(email=="")
		{
			$("#error-email").html("Nhập vào email");	
			$("#email-dn").addClass("invalid");
			$("#email-dn").focus();
		}
		else
		{
			if(pass=="")
			{
				$("#error-password").html("Nhập vào mật khẩu");	
				$("#password-dn").addClass("invalid");
				$("#password-dn").focus();
			}
			else
			{
				if(email!="admin@admin.com")
				{
					$("#error-email").html("Email không đúng");	
					$("#email-dn").addClass("invalid");
					$("#email-dn").focus();
				}
				else	
				{
					if(pass!="admin")
					{
						$("#error-password").html("Mật khẩu không đúng");	
						$("#password-dn").addClass("invalid");
						$("#password-dn").focus();
					}
					else
					{
						$("#btn-dangnhap").hide();
						$("#load-dn").show();
						setTimeout(function(){
							$(location).attr("href","file:///C:/Users/tuan/Desktop/Project2/pages/admin/admin.html");
						},1500);
					}
				}
			}
		}
	});

	$("#email-dn").keypress(function(){
		$("#error-email").html("");
		var email= $("#email-dn").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
		if(!regmail.test(email))
		{
			$("#error-email").html("Email không hợp lệ");
			$("#email-dn").addClass("invalid");
		}
		else
		{
			$("#error-email").html("");
			$("#email-dn").removeClass("invalid");
		}
	});

	$("#password-dn").keypress(function(){
		$("#error-password").html("");
		$("#password-dn").removeClass("invalid");
	});

	$("*").keyup(function(e){
		if(e.keyCode=="13")
		{
			var email= $("#email-dn").val();
			var pass= $("#password-dn").val();
			var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
			if(email=="")
			{
				$("#error-email").html("Nhập vào email");	
				$("#email-dn").addClass("invalid");
				$("#email-dn").focus();
			}
			else
			{
				if(pass=="")
				{
					$("#error-password").html("Nhập vào mật khẩu");	
					$("#password-dn").addClass("invalid");
					$("#password-dn").focus();
				}
				else
				{
					if(email!="admin@admin.com")
					{
						$("#error-email").html("Email không đúng");	
						$("#email-dn").addClass("invalid");
						$("#email-dn").focus();
					}
					else	
					{
						if(pass!="admin")
						{
							$("#error-password").html("Mật khẩu không đúng");	
							$("#password-dn").addClass("invalid");
							$("#password-dn").focus();
						}
						else
						{
							$("#btn-dangnhap").hide();
							$("#load-dn").show();
							setTimeout(function(){
								$(location).attr("href","file:///C:/Users/tuan/Desktop/Project2/pages/admin/admin.html");
							},2000);
						}
					}
				}
			}
		}
	});
});

// Đăng ký [home]

$(function(){

	$("#btn-dangky").click(function(){

		var hotendk= $("#hoten-dk").val();
		var emaildk=$("#email-dk").val();
		var matkhaudk= $("#matkhau-dk").val();
		var nhaplaimatkhau=$("#nhaplaimatkhau-dk").val();
		if(hotendk=="")
		{
			$("#error-hoten-dk").html("Vui lòng nhập họ và tên");
			$("#hoten-dk").addClass("invalid");
			$("#hoten-dk").focus();
		}
		else
		{
			if(emaildk=="")
			{
				$("#error-email-dk").html("Vui lòng nhập email");
				$("#email-dk").addClass("invalid");
				$("#email-dk").focus();
			}
			else
			{
				if(matkhaudk=="")
				{
					$("#error-matkhau-dk").html("Vui lòng nhập mật khẩu");
					$("#matkhau-dk").addClass("invalid");
					$("#matkhau-dk").focus();
				}
				else
				{
					if(nhaplaimatkhau=="")
					{
						$("#error-nhaplaimatkhau-dk").html("Chưa nhập lại mật khẩu");
						$("#nhaplaimatkhau-dk").addClass("invalid");
						$("#nhaplaimatkhau-dk").focus();
					}
					else
					{
						if(matkhaudk!=nhaplaimatkhau)
						{
							$("#error-nhaplaimatkhau-dk").html("Nhập lại mật khẩu chưa chính xác");
							$("#nhaplaimatkhau-dk").addClass("invalid");
							$("#nhaplaimatkhau-dk").focus();
						}
						else
						{
							$("#notification-dk").html("");
							$("#notification-dk").html("Tạo tài khoản thành công !!!");
							$("#notification-dk").css("color","#39E15D");
							$("#hoten-dk").focus();
						}
					}
				}
			}
		}
	});

	$("*").keyup(function(e){
		if(e.keyCode=="13")
		{
			var hotendk= $("#hoten-dk").val();
			var emaildk=$("#email-dk").val();
			var matkhaudk= $("#matkhau-dk").val();
			var nhaplaimatkhau=$("#nhaplaimatkhau-dk").val();
			if(hotendk=="")
			{
				$("#error-hoten-dk").html("Vui lòng nhập họ và tên");
				$("#hoten-dk").addClass("invalid");
				$("#hoten-dk").focus();
			}
			else
			{
				if(emaildk=="")
				{
					$("#error-email-dk").html("Vui lòng nhập email");
					$("#email-dk").addClass("invalid");
					$("#email-dk").focus();
				}
				else
				{
					if(matkhaudk=="")
					{
						$("#error-matkhau-dk").html("Vui lòng nhập mật khẩu");
						$("#matkhau-dk").addClass("invalid");
						$("#matkhau-dk").focus();
					}
					else
					{
						if(nhaplaimatkhau=="")
						{
							$("#error-nhaplaimatkhau-dk").html("Chưa nhập lại mật khẩu");
							$("#nhaplaimatkhau-dk").addClass("invalid");
							$("#nhaplaimatkhau-dk").focus();
						}
						else
						{
							if(matkhaudk!=nhaplaimatkhau)
							{
								$("#error-nhaplaimatkhau-dk").html("Nhập lại mật khẩu chưa chính xác");
								$("#nhaplaimatkhau-dk").addClass("invalid");
								$("#nhaplaimatkhau-dk").focus();
							}
							else
							{
								$("#notification-dk").html("");
								$("#notification-dk").html("Tạo tài khoản thành công !!!");
								$("#notification-dk").css("color","#39E15D");
								$("#hoten-dk").focus();
							}
						}
					}
				}
			}
		}
	});

	$("#hoten-dk").keypress(function(){
		$("#error-hoten-dk").html("");
		$("#hoten-dk").removeClass("invalid");
		$("#notification-dk").html("");
		$("#notification-dk").html("Tạo tài khoản");
		$("#notification-dk").css("color","#333");
	});
	$("#email-dk").keypress(function(){
		var emaildk=$("#email-dk").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;

		$("#error-email-dk").html("");
		if(!regmail.test(emaildk))
		{
			$("#error-email-dk").html("Email không hợp lệ");
			$("#email-dk").addClass("invalid");
			$("#email-dk").focus();
		}
		else
		{
			$("#error-email-dk").html("");
			$("#email-dk").removeClass("invalid");
		}
	});
	$("#matkhau-dk").keypress(function(){
		$("#error-matkhau-dk").html("");
		$("#matkhau-dk").removeClass("invalid");
	});
	$("#nhaplaimatkhau-dk").keypress(function(){
		$("#error-nhaplaimatkhau-dk").html("");
		$("#nhaplaimatkhau-dk").removeClass("invalid");
	});
});

// Gủi liên hệ [home]
$(function(){
	$("#btn-lienhe").click(function(){
		var name_lh= $("#name-lienhe").val();
		var email_lh= $("#email-lienhe").val();
		var noidung_lh=$("#noidung-lienhe").val();
		if(name_lh == "")
		{
			$("#name-lienhe").addClass("invalid");
			$("#name-lienhe").focus();
		}
		else
		{
			if(email_lh == "")
			{
				$("#email-lienhe").addClass("invalid");
				$("#email-lienhe").focus();
			}
			else
			{
				if(noidung_lh == "")
				{
					$("#noidung-lienhe").addClass("invalid");
					$("#noidung-lienhe").focus();
				}
			}
		}
	});

	$("#name-lienhe").keypress(function(){
		$("#name-lienhe").removeClass("invalid");
	});

	$("#email-lienhe").keypress(function(){
		var emaillh=$("#email-lienhe").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
		if(!regmail.test(emaillh))
		{
			$("#error-email-lienhe").html("Email không hợp lệ");
			$("#email-lienhe").addClass("invalid");
		}
		else
		{
			$("#email-lienhe").removeClass("invalid");
			$("#error-email-lienhe").html("");
		}
	});

	$("#noidung-lienhe").keypress(function(){
		$("#noidung-lienhe").removeClass("invalid");
	});
});
// Thêm mới đơn hàng [admin]

$(function(){
	'use strict';

	$(window).load(function(){
		$("#btn-thanhtoansau").attr("disabled","disabled");
		$("#btn-dathanhtoan").attr("disabled","disabled");
		$("#btn-spdonhang").attr("disabled","disabled");
		$("#price-tamtinh").html("0");
		$("#price-tongcong").html("0");
		$("#table").hide();
	});

	$("#tentour-donhang").keyup(function(){
		var tentour_dh=$("#tentour-donhang").val();
		var regNumber = /^\d+$/;
		if(tentour_dh!="")
		{
			$("#btn-spdonhang").removeAttr("disabled");
			if(regNumber.test(tentour_dh))
			{
				$("#erorr-tentour-donhang").html("");
				$("#erorr-tentour-donhang").html("Tên tour không chứa toàn số");
				$("#erorr-tentour-donhang").css("color","#DF2F2F");
				$("#tentour-donhang").addClass("invalid");
				$("#tentour-donhang").focus();	
			}
			else
			{
				if(tentour_dh.length < 10)
				{
					$("#erorr-tentour-donhang").html("");
					$("#erorr-tentour-donhang").html("Tên tour không nhỏ hơn 10 ký tự");
					$("#erorr-tentour-donhang").css("color","#DF2F2F");
					$("#tentour-donhang").addClass("invalid");
					$("#tentour-donhang").focus();	
				}
				else
				{
					$("#erorr-tentour-donhang").html("");
					$("#erorr-tentour-donhang").html("Tên tour");
					$("#erorr-tentour-donhang").css("color","#333");
					$("#tentour-donhang").removeClass("invalid");
				}
			}
		}
		else
		{
			$("#btn-spdonhang").attr("disabled","disabled");
		}
	});

	$("#giatour-donhang").keyup(function(){
		var giatour_dh=$("#giatour-donhang").val();
		var regNumber = /^\d+$/;
		if(!regNumber.test(giatour_dh) || giatour_dh <= 0)
		{
			$("#error-giatour-donhang").html("");
			$("#error-giatour-donhang").html("Giá phải là số và lớn hơn 0");
			$("#error-giatour-donhang").css("color","#DF2F2F");
			$("#giatour-donhang").addClass("invalid");
			$("#giatour-donhang").focus();
		}
		else
		{
			if(giatour_dh < 1000000)
			{
				$("#error-giatour-donhang").html("");
				$("#error-giatour-donhang").html("Giá phải lớn hơn 1.000.000 VNĐ");
				$("#error-giatour-donhang").css("color","#DF2F2F");
				$("#giatour-donhang").addClass("invalid");
				$("#giatour-donhang").focus();
			}
			else
			{
				if(giatour_dh > 1000000000)
				{
					$("#error-giatour-donhang").html("");
					$("#error-giatour-donhang").html("Giá phải nhỏ hơn 1.000.000.000 VNĐ");
					$("#error-giatour-donhang").css("color","#DF2F2F");
					$("#giatour-donhang").addClass("invalid");
					$("#giatour-donhang").focus();
				}
				else
				{
					$("#error-giatour-donhang").html("");
					$("#error-giatour-donhang").html("Giá");
					$("#error-giatour-donhang").css("color","#333");
					$("#giatour-donhang").removeClass("invalid");
				}
			}
		}
	});
	
	$("#giatour-donhang").focusout(function(){
		var giatour_dh=$("#giatour-donhang").val();
		$("#price-tamtinh").text(giatour_dh);
		$("#price-tongcong").text(giatour_dh);
	});
	
	$("#sove-donhang").keyup(function(){
		var songay_dh=$("#sove-donhang").val();
		var giatour_dh=$("#giatour-donhang").val();
		var giathuc=1;
		var regNumber = /^\d+$/;
		if(songay_dh=="")
		{
			$("#price-tamtinh").text(giatour_dh);
			$("#price-tongcong").text(giatour_dh);
		}
		if(!regNumber.test(songay_dh) || songay_dh <= 0)
		{
			$("#erorr-sove-donhang").html("");
			$("#erorr-sove-donhang").html("Số vé phải là số và lớn hơn 0");
			$("#erorr-sove-donhang").css("color","#DF2F2F");
			$("#sove-donhang").addClass("invalid");
			$("#sove-donhang").focus();
		}
		else
		{
			if(songay_dh > 100)
			{
				$("#erorr-sove-donhang").html("");
				$("#erorr-sove-donhang").html("Số vé không lớn hơn 100");
				$("#erorr-sove-donhang").css("color","#DF2F2F");
				$("#sove-donhang").addClass("invalid");
				$("#sove-donhang").focus();
			}
			else
			{
				$("#erorr-sove-donhang").html("");
				$("#erorr-sove-donhang").html("Số vé");
				$("#erorr-sove-donhang").css("color","#333");
				$("#sove-donhang").removeClass("invalid");

				giathuc=giatour_dh*songay_dh;
				$("#price-tamtinh").text(giathuc);
				$("#price-tongcong").text(giathuc);
			}
		}
	});

	$("#btn-spdonhang").click(function(){
		var tentour_dh=$("#tentour-donhang").val();
		var giatour_dh=$("#giatour-donhang").val();
		var songay_dh=$("#sove-donhang").val();
		if(tentour_dh=="")
		{
			$("#tentour-donhang").focus();
		}
		else
		{
			if(giatour_dh=="")
			{
				$("#giatour-donhang").focus();
			}
			else
			{
				if(songay_dh=="")
				{
					$("#sove-donhang").focus();
				}
				else
				{
					$("#name-tour1-dh").text(tentour_dh);
					$("#price-tour1-dh").text(""+$("#price-tamtinh").html()+"đ");
					$("#songay-tour1-dh").text(songay_dh);
					$("#table").show();
					$("#btn-thanhtoansau").removeAttr("disabled");
					$("#btn-dathanhtoan").removeAttr("disabled");
					$("#btn-spdonhang").removeAttr("disabled");
				}
			}
		}
	});

	$("#remove-tour-dh").click(function(){
		$("#table").hide();
		$("#tentour-donhang").val("");
		$("#giatour-donhang").val("");
		$("#songay-donhang").val("");
		$("#price-tamtinh").html("0");
		$("#price-tongcong").html("0");
		$("#btn-thanhtoansau").attr("disabled","disabled");
		$("#btn-dathanhtoan").attr("disabled","disabled");
		$("#btn-spdonhang").attr("disabled","disabled");
	});
});

// Chi tiết đơn hàng
$(function(){
	$(window).load(function(){
		var d= new Date();

		$("#day-dh").text(d.getDate());
		$("#month-dh").text(d.getMonth());
		$("#year-dh").text(d.getFullYear());


		$("#hour-dh").text(d.getHours());
		$("#minute-dh").text(d.getMinutes());

		$("#load-xacnhan-dh").hide();
	});

	$("#print-dh").click(function(){
        window.print();
	});

	$("#cac-giao-dich").click(function(){
		if($(this).is(":checked"))
		{
			$("#hoat-dong-1").hide();
			$("#hoat-dong-2").hide();
		}
	});
	$("#tat-ca-hoat-dong").click(function(){
		if($(this).is(":checked"))
		{
			$("#hoat-dong-1").show();
			$("#hoat-dong-2").show();
		}
	});

	$("#sua-email-kh").click(function(){
		var email_sua_dh=$("#sua-email-nhan").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;

		if(email_sua_dh=="")
		{
			$("#error-sua-email-nhan").html("");
			$("#error-sua-email-nhan").html("Email không được rỗng");
			$("#error-sua-email-nhan").css("color","#CE3737");
			$("#sua-email-nhan").addClass("invalid");
			$("#sua-email-nhan").focus();
		}
		else
		{
			$("#error-sua-email-nhan").html("");
			$("#error-sua-email-nhan").html("Email");
			$("#error-sua-email-nhan").css("color","#333");
			$("#sua-email-nhan").removeClass("invalid");
		}

	});
	$("#sua-email-nhan").keyup(function(){
		var email_sua_dh=$("#sua-email-nhan").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;

		if(!regmail.test(email_sua_dh))
		{
			$("#error-sua-email-nhan").html("");
			$("#error-sua-email-nhan").html("Email không đúng");
			$("#error-sua-email-nhan").css("color","#CE3737");
			$("#sua-email-nhan").addClass("invalid");
			$("#sua-email-nhan").focus();
		}
		else
		{
			$("#error-sua-email-nhan").html("");
			$("#error-sua-email-nhan").html("Email");
			$("#error-sua-email-nhan").css("color","#333");
			$("#sua-email-nhan").removeClass("invalid");
			$("#email-donhang-kh").text(email_sua_dh);
		}
	});
});
// Thêm mới tour[admin]

$(function(){
	$("#luu-tour").click(function(){

		var tentour= $("#ten-tour").val();
		var noidungtour=$(".noidung-tour").val();
		var loaitour= $("#loai-tour").val();
		var songay= $("#so-ngay").val();
		var gia= $("#gia").val();
		if(tentour=="")
		{
			$("#error-tentour").html("* (Tên tour không được trống)");
			$("#ten-tour").addClass("invalid");
			$("#ten-tour").focus();
		}
		else
		{
			if(noidungtour=="")
			{
				$("#error-noidung-tour").html("*Nội dung tour không được trống");
				$(".noidung-tour").focus();
			}
			else
			{
				if(loaitour=="")
				{
					$("#error-loaitour").html("* (Loại tour không được trống)");
					$("#loai-tour").addClass("invalid");
					$("#loai-tour").focus();
				}
				else
				{
					if(songay=="")
					{
						$("#error-so-ngay").html("* (Số ngày không rỗng)");
						$("#so-ngay").addClass("invalid");
						$("#so-ngay").focus();
					}
					else
					{
						if(gia=="")
						{
							$("#error-gia").html("* (Chưa nhập giá)");
							$("#gia").addClass("invalid");
							$("#gia").focus();
						}
						else
						{
							$("#notification").html("Thêm thành công vào hệ thống !!!");
							$("#ten-tour").focus();
						}
					}
				}
			}
		}
	});

	$("#luuvathem-tour").click(function(){
		var tentour= $("#ten-tour").val();
		var noidungtour=$(".noidung-tour").val();
		var loaitour= $("#loai-tour").val();
		var songay= $("#so-ngay").val();
		var gia= $("#gia").val();
		if(tentour=="")
		{
			$("#error-tentour").html("* (Tên tour không được trống)");
			$("#ten-tour").addClass("invalid");
			$("#ten-tour").focus();
		}
		else
		{
			if(noidungtour=="")
			{
				$("#error-noidung-tour").html("*Nội dung tour không được trống");
				$(".noidung-tour").focus();
			}
			else
			{
				if(loaitour=="")
				{
					$("#error-loaitour").html("* (Loại tour không được trống)");
					$("#loai-tour").addClass("invalid");
					$("#loai-tour").focus();
				}
				else
				{
					if(songay=="")
					{
						$("#error-so-ngay").html("* (Số ngày không rỗng)");
						$("#so-ngay").addClass("invalid");
						$("#so-ngay").focus();
					}
					else
					{
						if(gia=="")
						{
							$("#error-gia").html("* (Chưa nhập giá)");
							$("#gia").addClass("invalid");
							$("#gia").focus();
						}
						else
						{
							$("#ten-tour").val("");
							$(".noidung-tour").val("");
							$("#loai-tour").val("");
							$("#so-ngay").val("");
							$("#gia").val("");
							$("#ten-tour").focus();
							$("#notification").html("Thêm thành công vào hệ thống !!!");
						}
					}
				}
			}
		}
	});

	$("#ten-tour").keypress(function(){
			$("#notification").html("");
			$("#error-tentour").html("");
			$("#ten-tour").removeClass("invalid");
	});

	$(".noidung-tour").keypress(function(){
			$("#error-noidung-tour").html("");
	});

	$("#loai-tour").keypress(function(){
			$("#error-loaitour").html("");
			$("#loai-tour").removeClass("invalid");	
	});

	$("#so-ngay").keyup(function(){

			var songay= $("#so-ngay").val();
			var regNumber = /^\d+$/;

			if(!regNumber.test(songay))
			{
				$("#error-so-ngay").html("* Phải là số lớn hơn hoặc bằng 0");
				$("#so-ngay").addClass("invalid");
				$("#so-ngay").focus();
			}
			else
			{
				$("#error-so-ngay").html("");
				$("#so-ngay").removeClass("invalid");
			}
	});

	$("#gia").keypress(function(){
			var gia=$("#gia").val();
			var regNumber = /^\d+$/;
			if(!regNumber.test(gia))
			{
				$("#error-gia").html("Giá phải là số");
				$("#gia").addClass("invalid");
			}
			else
			{
				if(gia < 1000000)
				{
					$("#error-gia").html("Giá không nhỏ hơn 1.000.000 VND");
					$("#gia").addClass("invalid");
				}
				else
				{
					$("#error-gia").html("");
					$("#gia").removeClass("invalid");
				}
			}
	});

	$("#hienthi-thoigian-tour").click(function(){
		$("#thoi-gian-hien-thi").show();
		$("#h6-hide").show();
	});

	$("#an-thoigian-tour").click(function(){
		$("#thoi-gian-hien-thi").hide();
		$("#h6-hide").hide();
	});
});

// danh mục tour

$(function(){
	$("#luu-danh-muc-tour").click(function(){

		var tendanhmuctour= $("#ten-danh-muc-tour").val();
		var motadanhmuctour= $("#mo-ta-danh-muc-tour").val();

		if(tendanhmuctour=="")
		{
			$("#error-ten-danh-muc-tour").html("*(Tên danh mục không rỗng)");
			$("#ten-danh-muc-tour").addClass("invalid");
			$("#ten-danh-muc-tour").focus();
		}
		else
		{
			if(motadanhmuctour=="")
			{
				$("#error-mo-ta-danh-muc-tour").html("-Mô tả danh mục không rỗng");
				$("#mo-ta-danh-muc-tour").addClass("invalid");
				$("#mo-ta-danh-muc-tour").focus();
			}
		}
	});

	$("#ten-danh-muc-tour").keypress(function(){
		$("#notification-danh-muc").html("");
		$("#error-ten-danh-muc-tour").html("");
		$("#ten-danh-muc-tour").removeClass("invalid");
	});

	$("#mo-ta-danh-muc-tour").keypress(function(){
		$("#error-mo-ta-danh-muc-tour").html("");
		$("#mo-ta-danh-muc-tour").removeClass("invalid");
	});

	$("#luuvathem-danh-muc-tour").click(function(){
		var tendanhmuctour= $("#ten-danh-muc-tour").val();
		var motadanhmuctour= $("#mo-ta-danh-muc-tour").val();

		if(tendanhmuctour=="")
		{
			$("#error-ten-danh-muc-tour").html("*(Tên danh mục không rỗng)");
			$("#ten-danh-muc-tour").addClass("invalid");
			$("#ten-danh-muc-tour").focus();
		}
		else
		{
			if(motadanhmuctour=="")
			{
				$("#error-mo-ta-danh-muc-tour").html("-Mô tả danh mục không rỗng");
				$("#mo-ta-danh-muc-tour").addClass("invalid");
				$("#mo-ta-danh-muc-tour").focus();
			}
			else
			{
				$("#notification-danh-muc").html("Thêm thành công danh mục vào hệ thống");
				$("#ten-danh-muc-tour").val("");
				$("#mo-ta-danh-muc-tour").val("");
				$("#ten-danh-muc-tour").focus();
			}
		}
	});
});

// Khách hàng

$(function(){

	$("#hien-thi-dia-diem").click(function(){
		$("#dia-chi-kh-khac1").css("display","inline");
	});
});
// Check all
$(function(){
	'use strcit';
	$("#check-all").change(function(){
		$("input:checkbox").prop('checked',$(this).prop("checked"));

		if($(this).is(':checked'))
		{
			$("#delete").show();
		}
		else
		{
			$("#delete").hide();
		}
	});
	$("#check1").change(function(){
		if($(this).is(':checked'))
		{
			$("#delete").show();
		}
		else
		{
			$("#delete").hide();
		}
	});
	$("#check2").change(function(){
		if($(this).is(':checked'))
		{
			$("#delete").show();
		}
		else
		{
			$("#delete").hide();
		}
	});
	$("#check3").change(function(){
		if($(this).is(':checked'))
		{
			$("#delete").show();
		}
		else
		{
			$("#delete").hide();
		}
	});
	$("#check4").change(function(){
		if($(this).is(':checked'))
		{
			$("#delete").show();
		}
		else
		{
			$("#delete").hide();
		}
	});
	$("#check5").change(function(){
		if($(this).is(':checked'))
		{
			$("#delete").show();
		}
		else
		{
			$("#delete").hide();
		}
	});
	$("#check6").change(function(){
		if($(this).is(':checked'))
		{
			$("#delete").show();
		}
		else
		{
			$("#delete").hide();
		}
	});
	$("#check7").change(function(){
		if($(this).is(':checked'))
		{
			$("#delete").show();
		}
		else
		{
			$("#delete").hide();
		}
	});
});

// Cấu hình website [advanced]

$(function(){
	'use strict';

	$(window).load(function(){
		$("#show-advanced-setting").hide();
	});

	$("#check-on-advanced").click(function(){
		if($(this).is(':checked'))
		{
			$("#show-advanced-setting").show();
		}
		else
		{
			$("#show-advanced-setting").hide();
		}
	});
});

// Cấu hình thông báo

$(function(){
	'use strict';
	var bool=false;
	$(window).load(function(){
		if(bool==false)
		{
			$("#setting-notification").html("tắt");
		}
		else
		{
			$("#setting-notification").html("Bật");
		}
	});

	$("#notification-on-off").click(function(){
		if(bool==false)
		{
			$("#setting-notification").html("Tắt");
			bool=false;
		}
		else
		{
			$("#setting-notification").html("Bật");
			bool=true;
		}
	});
});

// Cấu hình thanh toán

$(function(){


	// OnePay ATM
	$(window).load(function(){
		$("#panel-onepay-atm").hide();
	});

	$("#show-panel-onepay-atm").click(function(){
		$("#panel-onepay-atm").show();
		$("#show-panel-onepay-atm").hide();
	});

	$("#hide-panel-onepay-atm").click(function(){
		$("#show-panel-onepay-atm").show();
		$("#panel-onepay-atm").hide();
	});

	$("#save-onepay-atm").click(function(){
		var merchant= $("#Merchant-atm").val();
		var hashcode=$("#Hashcode-atm").val();
		var accesscode=$("#Assesscode-atm").val();

		if(merchant=="")
		{
			$("#error-merchant-atm").html("");
			$("#error-merchant-atm").html("Tài khoản Merchant không rỗng");
			$("#error-merchant-atm").css("color","#E72A2A");
			$("#Merchant-atm").addClass("invalid");
			$("#Merchant-atm").focus();
		}
		else
		{
			if(hashcode=="")
			{
				$("#error-hashcode-atm").html("");
				$("#error-hashcode-atm").html("Hashcode không rỗng");
				$("#error-hashcode-atm").css("color","#E72A2A");
				$("#Hashcode-atm").addClass("invalid");
				$("#Hashcode-atm").focus();
			}
			else
			{
				if(accesscode=="")
				{
					$("#error-asscesscode-atm").html("");
					$("#error-asscesscode-atm").html("AccessCode không rỗng");
					$("#error-asscesscode-atm").css("color","#E72A2A");
					$("#Assesscode-atm").addClass("invalid");
					$("#Assesscode-atm").focus();
				}
			}
		}
	});

	$("#Merchant-atm").keypress(function(){
		$("#error-merchant-atm").html("");
		$("#error-merchant-atm").html("Tài khoản Merchant");
		$("#error-merchant-atm").css("color","#333");
		$("#Merchant-atm").removeClass("invalid");
	});

	$("#Hashcode-atm").keypress(function(){
		$("#error-hashcode-atm").html("");
		$("#error-hashcode-atm").html("Hashcode");
		$("#error-hashcode-atm").css("color","#333");
		$("#Hashcode-atm").removeClass("invalid");
	});

	$("#Assesscode-atm").keypress(function(){
		$("#error-asscesscode-atm").html("");
		$("#error-asscesscode-atm").html("AccessCode");
		$("#error-asscesscode-atm").css("color","#333");
		$("#Assesscode-atm").removeClass("invalid");
	});

	//OnePay Visa
	$(window).load(function(){
		$("#panel-onepay-visa").hide();
	});

	$("#show-panel-onepay-visa").click(function(){
		$("#panel-onepay-visa").show();
		$("#show-panel-onepay-visa").hide();
	});

	$("#hide-panel-onepay-visa").click(function(){
		$("#show-panel-onepay-visa").show();
		$("#panel-onepay-visa").hide();
	});

	$("#save-onepay-visa").click(function(){
		var merchant= $("#Merchant-visa").val();
		var hashcode=$("#Hashcode-visa").val();
		var accesscode=$("#Assesscode-visa").val();

		if(merchant=="")
		{
			$("#error-merchant-visa").html("");
			$("#error-merchant-visa").html("Tài khoản Merchant không rỗng");
			$("#error-merchant-visa").css("color","#E72A2A");
			$("#Merchant-visa").addClass("invalid");
			$("#Merchant-visa").focus();
		}
		else
		{
			if(hashcode=="")
			{
				$("#error-hashcode-visa").html("");
				$("#error-hashcode-visa").html("Hashcode không rỗng");
				$("#error-hashcode-visa").css("color","#E72A2A");
				$("#Hashcode-visa").addClass("invalid");
				$("#Hashcode-visa").focus();
			}
			else
			{
				if(accesscode=="")
				{
					$("#error-asscesscode-visa").html("");
					$("#error-asscesscode-visa").html("AccessCode không rỗng");
					$("#error-asscesscode-visa").css("color","#E72A2A");
					$("#Assesscode-visa").addClass("invalid");
					$("#Assesscode-visa").focus();
				}
			}
		}
	});

	$("#Merchant-visa").keypress(function(){
		$("#error-merchant-visa").html("");
		$("#error-merchant-visa").html("Tài khoản Merchant");
		$("#error-merchant-visa").css("color","#333");
		$("#Merchant-visa").removeClass("invalid");
	});

	$("#Hashcode-visa").keypress(function(){
		$("#error-hashcode-visa").html("");
		$("#error-hashcode-visa").html("Hashcode");
		$("#error-hashcode-visa").css("color","#333");
		$("#Hashcode-visa").removeClass("invalid");
	});

	$("#Assesscode-visa").keypress(function(){
		$("#error-asscesscode-visa").html("");
		$("#error-asscesscode-visa").html("AccessCode");
		$("#error-asscesscode-visa").css("color","#333");
		$("#Assesscode-visa").removeClass("invalid");
	});

	// Ngân lượng
	$(window).load(function(){
		$("#panel-nganluong").hide();
	});

	$("#show-panel-nganluong").click(function(){
		$("#panel-nganluong").show();
		$("#show-panel-nganluong").hide();
	});

	$("#hide-panel-nganluong").click(function(){
		$("#show-panel-nganluong").show();
		$("#panel-nganluong").hide();
	});

	$("#save-nganluong").click(function(){
		var matichhop= $("#matichop-nganluong").val();
		var xacnhanma=$("#xacnhanma-nganluong").val();
		var emailthanhtoan=$("#emailthanhtoan-nganluong").val();
		var accesscode=$("#accesscode-nganluong").val();
		if(matichhop=="")
		{
			$("#error-matichhop-nganluong").html("");
			$("#error-matichhop-nganluong").html("Mã website tích hợp không rỗng");
			$("#error-matichhop-nganluong").css("color","#E72A2A");
			$("#matichop-nganluong").addClass("invalid");
			$("#matichop-nganluong").focus();
		}
		else
		{
			if(xacnhanma=="")
			{
				$("#error-xacnhanma-nganluong").html("");
				$("#error-xacnhanma-nganluong").html("Mã xác nhận website tích hợp không rỗng");
				$("#error-xacnhanma-nganluong").css("color","#E72A2A");
				$("#xacnhanma-nganluong").addClass("invalid");
				$("#xacnhanma-nganluong").focus();
			}
			else
			{
				if(emailthanhtoan=="")
				{
					$("#error-emailthanhtoan-nganluong").html("");
					$("#error-emailthanhtoan-nganluong").html("Email thanh toán không rỗng");
					$("#error-emailthanhtoan-nganluong").css("color","#E72A2A");
					$("#emailthanhtoan-nganluong").addClass("invalid");
					$("#emailthanhtoan-nganluong").focus();
				}
				else
				{
					if(accesscode=="")
					{
						$("#error-accesscode-nganluong").html("");
						$("#error-accesscode-nganluong").html("AccessCode không rỗng");
						$("#error-accesscode-nganluong").css("color","#E72A2A");
						$("#accesscode-nganluong").addClass("invalid");
						$("#accesscode-nganluong").focus();
					}
				}
			}
		}
	});

	$("#matichop-nganluong").keypress(function(){
		$("#error-matichhop-nganluong").html("");
		$("#error-matichhop-nganluong").html("Mã website tích hợp");
		$("#error-matichhop-nganluong").css("color","#333");
		$("#matichop-nganluong").removeClass("invalid");
	});

	$("#xacnhanma-nganluong").keypress(function(){
		var matichhop= $("#matichop-nganluong").val();
		var xacnhanma=$("#xacnhanma-nganluong").val();
		if(matichhop!=xacnhanma)
		{
			$("#error-xacnhanma-nganluong").html("");
			$("#error-xacnhanma-nganluong").html("Mã xác nhận không chính xác");
			$("#error-xacnhanma-nganluong").css("color","#E72A2A");
			$("#xacnhanma-nganluong").addClass("invalid");
			$("#xacnhanma-nganluong").focus();
		}
		else
		{
			$("#error-xacnhanma-nganluong").html("");
			$("#error-xacnhanma-nganluong").html("Mã xác nhận hợp lệ");
			$("#error-xacnhanma-nganluong").css("color","#36CD7D");
			$("#xacnhanma-nganluong").removeClass("invalid");
		}
	});

	$("#emailthanhtoan-nganluong").keypress(function(){
		var emailthanhtoan=$("#emailthanhtoan-nganluong").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
		
		if(!regmail.test(emailthanhtoan))
		{
			$("#error-emailthanhtoan-nganluong").html("");
			$("#error-emailthanhtoan-nganluong").html("Email không hợp lệ");
			$("#error-emailthanhtoan-nganluong").css("color","#E72A2A");
			$("#emailthanhtoan-nganluong").addClass("invalid");
			$("#emailthanhtoan-nganluong").focus();
		}
		else
		{
			$("#error-emailthanhtoan-nganluong").html("");
			$("#error-emailthanhtoan-nganluong").html("Email hợp lệ");
			$("#error-emailthanhtoan-nganluong").css("color","#36CD7D");
			$("#emailthanhtoan-nganluong").removeClass("invalid");
		}
	});

	$("#accesscode-nganluong").keypress(function(){
			$("#error-accesscode-nganluong").html("");
			$("#error-accesscode-nganluong").html("AccessCode");
			$("#error-accesscode-nganluong").css("color","#333");
			$("#accesscode-nganluong").removeClass("invalid");
	});

		// sử dụng nội dung mẫu

	$("#btn-hoantra").click(function(){
		$("#mau-hoantra").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat, itaque impedit excepturi qui? Voluptatibus, quae. Obcaecati pariatur explicabo dolorum doloremque eius magni ipsa. Natus, at cum maiores id atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolore repudiandae dicta suscipit veniam delectus ullam quis nesciunt magnam, amet impedit aliquid illo at aperiam repellendus odit enim! Accusantium, aspernatur.");
	});

	$("#btn-baomat").click(function(){
		$("#mau-baomat").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat, itaque impedit excepturi qui? Voluptatibus, quae. Obcaecati pariatur explicabo dolorum doloremque eius magni ipsa. Natus, at cum maiores id atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolore repudiandae dicta suscipit veniam delectus ullam quis nesciunt magnam, amet impedit aliquid illo at aperiam repellendus odit enim! Accusantium, aspernatur.");
	});

	$("#btn-dieukhoan").click(function(){
		$("#mau-dieukhoan").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quaerat, itaque impedit excepturi qui? Voluptatibus, quae. Obcaecati pariatur explicabo dolorum doloremque eius magni ipsa. Natus, at cum maiores id atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum dolore repudiandae dicta suscipit veniam delectus ullam quis nesciunt magnam, amet impedit aliquid illo at aperiam repellendus odit enim! Accusantium, aspernatur.");
	});
});

// Thêm tài khoản
$(function(){

	// validate account
	$("#save-account").click(function(){

		var name_account= $("#account-name").val();
		var email_account=$("#account-email").val();
		var pass_account=$("#account-password").val();
		var checkpass_account=$("#account-checkpassword").val();

		if(name_account=="")
		{
			$("#error-name-account").html("");
			$("#error-name-account").css("color","#EC3737");
			$("#error-name-account").html("Tên không được trống");
			$("#account-name").addClass("invalid");
			$("#account-name").focus();
		}
		else
		{
			if(email_account=="")
			{
				$("#error-email-account").html("");
				$("#error-email-account").css("color","#EC3737");
				$("#error-email-account").html("Email không được trống");
				$("#account-email").addClass("invalid");
				$("#account-email").focus();
			}
			else
			{
				if(pass_account=="")
				{
					$("#error-password-account").html("");
					$("#error-password-account").css("color","#EC3737");
					$("#error-password-account").html("Chưa nhập mật khẩu");
					$("#account-password").addClass("invalid");
					$("#account-password").focus();
				}
				else
				{
					if(checkpass_account=="")
					{
						$("#error-checkpassword-account").html("");
						$("#error-checkpassword-account").css("color","#EC3737");
						$("#error-checkpassword-account").html("Chưa nhập lại mật khẩu");
						$("#account-checkpassword").addClass("invalid");
						$("#account-checkpassword").focus();
					}
					else
					{
						if(pass_account!=checkpass_account)
						{
							$("#error-checkpassword-account").html("");
							$("#error-checkpassword-account").css("color","#EC3737");
							$("#error-checkpassword-account").html("Mật khẩu nhập lại không chính xác");
							$("#account-checkpassword").addClass("invalid");
							$("#account-checkpassword").focus();
						}
					}
				}
			}
		}
	});
	
	$("#account-name").keypress(function(){

		$("#error-name-account").html("");
		$("#error-name-account").css("color","#333");
		$("#error-name-account").html("Tên");
		$("#account-name").removeClass("invalid");
	});	

	$("#account-email").keypress(function(){
		var email_account=$("#account-email").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
		if(!regmail.test(email_account))
		{
			$("#error-email-account").html("");
			$("#error-email-account").css("color","#EC3737");
			$("#error-email-account").html("Email không hợp lệ");
			$("#account-email").addClass("invalid");
			$("#account-email").focus();
		}
		else
		{
			$("#error-email-account").html("");
			$("#error-email-account").css("color","#333");
			$("#error-email-account").html("Email");
			$("#account-email").removeClass("invalid");
		}
	});	

	$("#account-password").keypress(function(){

		$("#error-password-account").html("");
		$("#error-password-account").css("color","#333");
		$("#error-password-account").html("Mật khẩu");
		$("#account-password").removeClass("invalid");
	});	

	$("#account-checkpassword").keypress(function(){

		$("#error-checkpassword-account").html("");
		$("#error-checkpassword-account").css("color","#333");
		$("#error-checkpassword-account").html(" Nhập lại mật khẩu");
		$("#account-checkpassword").removeClass("invalid");
	});

	$("#telnumber-account").keypress(function(){
		var tel_number=$("#telnumber-account").val();
		var regNumber = /^\d+$/;
		if(!regNumber.test(tel_number))
		{
			$("#error-telnumber-account").html("");
			$("#error-telnumber-account").css("color","#EC3737");
			$("#error-telnumber-account").html("Số điện thoại không chứa ký tự");
			$("#telnumber-account").addClass("invalid");
			$("#telnumber-account").focus();
		}
		else
		{
			$("#error-telnumber-account").html("");
			$("#error-telnumber-account").css("color","#333");
			$("#error-telnumber-account").html("Số điện thoại");
			$("#telnumber-account").removeClass("invalid");
		}
	});
	// phân quyền
	$(window).load(function(){
		$("#role-account").hide();
	});

	$("#check-phan-quyen-account").click(function(){

		if($(this).is(':checked'))
		{
			$("#role-account").show();
		}
		else
		{
			$("#role-account").hide();
		}
	});
});

// Thêm tên miền
$(function(){
	'use strict';

	$(window).load(function(){
		$("#domain1").hide();
	});	

	$("#save-domains").click(function(){
		var name_domain=$("#name-domain").val();
		if(name_domain=="")
		{
			$("#error-name-domain").html("");
			$("#error-name-domain").css("color","#D63838");
			$("#error-name-domain").html("Tên miền không rỗng");
			$("#name-domain").addClass("invalid");
			$("#name-domain").focus();
		}
		else
		{
			$("#name-domain1").text(name_domain);
			$("#domain1").show();
		}
	});
	
	$("#name-domain").keyup(function(){
		var name_domain=$("#name-domain").val();
		var regDomain=/([a-z0-9-]+\.(?:com|vn|net|org|co\.uk))(?:\/|$)/;
		if(!regDomain.test(name_domain))
		{
			$("#error-name-domain").html("");
			$("#error-name-domain").css("color","#D63838");
			$("#error-name-domain").html("Tên miền không hợp lệ");
			$("#name-domain").addClass("invalid");
			$("#name-domain").focus();
		}
		else
		{
			$("#error-name-domain").html("");
			$("#error-name-domain").css("color","#333");
			$("#error-name-domain").html("Tên miền");
			$("#name-domain").removeClass("invalid");
		}
		
	});
});

// Xóa file 
$(function(){

	$(window).load(function(){
		$("#delete").hide();
		$("#none-item").hide();
	});
	$("#del-file").click(function(){
		$("#image1").hide();
	});

	$("#delete").click(function(){
		$("#delete").hide();
		$("#count-item").html("");
		$("#all-item").hide();
		$("#none-item").show();
	});	
});

// Theme

$(function(){

	$(window).load(function(){

		$("#setting-theme-undo").attr("disabled","disabled");
		$("#setting-theme-close").attr("disabled","disabled");
		$("#setting-theme-save").attr("disabled","disabled");

	});

	$("#setting-change1").click(function(){
		$("#setting-theme-undo").removeAttr("disabled");
		$("#setting-theme-close").removeAttr("disabled");
		$("#setting-theme-save").removeAttr("disabled");
	});
	$("#setting-change2").click(function(){
		$("#setting-theme-undo").removeAttr("disabled");
		$("#setting-theme-close").removeAttr("disabled");
		$("#setting-theme-save").removeAttr("disabled");
	});
	$("#setting-change3").click(function(){
		$("#setting-theme-undo").removeAttr("disabled");
		$("#setting-theme-close").removeAttr("disabled");
		$("#setting-theme-save").removeAttr("disabled");
	});
	$("#setting-change4").click(function(){
		$("#setting-theme-undo").removeAttr("disabled");
		$("#setting-theme-close").removeAttr("disabled");
		$("#setting-theme-save").removeAttr("disabled");
	});
	$("#setting-change5").click(function(){
		$("#setting-theme-undo").removeAttr("disabled");
		$("#setting-theme-close").removeAttr("disabled");
		$("#setting-theme-save").removeAttr("disabled");
	});

	$("#screen-desktop").click(function(){
		$("#screen-desktop").addClass("screen-active");
		$("#screen-tablet").removeClass("screen-active");
		$("#screen-mobile").removeClass("screen-active");
		$("#screen-iframe").css({
			"width":"1470px",
			"margin-left":"0px",
			"height":"1000px"
		});
	});
	$("#screen-tablet").click(function(){
		$("#screen-tablet").addClass("screen-active");
		$("#screen-desktop").removeClass("screen-active");
		$("#screen-mobile").removeClass("screen-active");
		$("#screen-iframe").css({
			"width":"960px",
			"margin-left":"150px",
			"height":"1000px"
		});
	});
	$("#screen-mobile").click(function(){
		$("#screen-mobile").addClass("screen-active");
		$("#screen-tablet").removeClass("screen-active");
		$("#screen-desktop").removeClass("screen-active");
		$("#screen-iframe").css({
			"width":"480px",
			"margin-left":"270px",
			"height":"800px",
			"background-image":"../../img/bg_iphone_svg.png"
		});
	});
});

// Định dạng kiểu tiền tệ
function format_curency(a)
{
	a.value=a.value.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

// tìm kiếm
$(function(){

	$("#search-tk").keyup(function(e){
		if(e.keyCode=="13")
		{
			// var keySearch=$("#search").val();
			$(location).attr("href","file:///C:/Users/tuan/Desktop/Project2/pages/admin/pages/search/search.html");
			// $("#txt-loc-search").text(keySearch);
		}
	});

});

// Bình luận 
$(function(){

	$(window).load(function(){
		$("#gui-binhluan").attr("disabled","disabled");
	});

	$("#gui-binhluan").click(function(){
		var hoten_bl= $("#hoten-binhluan").val();
		var email_bl =$("#email-binhluan").val();
		var noidung_bl=$("#noidung-binhluan").val();
		$("#note-success-binhluan").html("");
		if(hoten_bl == "")
		{
			$("#error-hoten-binhluan").html("Tên không được rỗng ");
			$("#hoten-binhluan").addClass("invalid");
			$("#hoten-binhluan").focus();
		}
		else
		{
			if(email_bl == "")
			{
				$("#error-email-binhluan").html("Email không được rỗng ");
				$("#email-binhluan").addClass("invalid");
				$("#email-binhluan").focus();
			}
			else
			{
				if(noidung_bl == "")
				{
					$("#error-noidung-binhluan").html("Nội dung không được rỗng ");
					$("#noidung-binhluan").addClass("invalid");
					$("#noidung-binhluan").focus();
				}
				else
				{
					$("#hoten-binhluan").val("");
					$("#email-binhluan").val("");
					$("#noidung-binhluan").val("");
					$("#note-success-binhluan").html("Bình luận của bạn đã thêm thành công");
					$("#NoiDung-BinhLuan").append('<tr> <td><i class="fa fa-user"></td> <td> <b>'+hoten_bl+' </b></td> <td>'+noidung_bl+'</td> <td>18/05/2016</td> </tr>')
				}
			}
		}
	});

	$("#hoten-binhluan").keypress(function(){
		$("#error-hoten-binhluan").html("");
		$("#hoten-binhluan").removeClass("invalid");
		$("#note-success-binhluan").html("");
	});

	$("#email-binhluan").keyup(function(){
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;
		var email_bl =$("#email-binhluan").val();
		if(!regmail.test(email_bl))
		{
			$("#error-email-binhluan").html("");
			$("#error-email-binhluan").html("Email không hợp lệ");
			$("#email-binhluan").addClass("invalid");
			$("#email-binhluan").focus();
			$("#note-success-binhluan").html("");
		}
		else
		{
			$("#error-email-binhluan").html("");
			$("#email-binhluan").removeClass("invalid");
		}
	});

	$("#noidung-binhluan").keypress(function(){
		$("#error-noidung-binhluan").html("");
		$("#noidung-binhluan").removeClass("invalid");
		$("#note-success-binhluan").html("");
		$("#gui-binhluan").removeAttr("disabled");
	});
});

// đặt ngay
$(function(){

	$("#dat-ngay-tour").click(function(){
		var hoten_dt= $("#hoten-dattour").val();
		var email_dt= $("#email-dattour").val();
		var sdt_dt= $("#sdt-dattour").val();
		var songuoi_dt= $("#songuoi-dattour").val();
		var diachi_dt =$("#diachi-dattour").val();

		if(hoten_dt == "")
		{
			$("#error-hoten-dattour").html("Tên không được trống");
			$("#hoten-dattour").addClass("invalid");
			$("#hoten-dattour").focus();
		}
		else
		{
			if( email_dt =="")
			{
				$("#error-email-dattour").html("Email không được trống");
				$("#email-dattour").addClass("invalid");
				$("#email-dattour").focus();
			}
			else
			{
				if(sdt_dt == "")
				{
					$("#error-sdt-dattour").html("Điện thoại không được trống");
					$("#sdt-dattour").addClass("invalid");
					$("#sdt-dattour").focus();
				}
				else
				{
					if(songuoi_dt == "")
					{
						$("#error-songuoi-dattour").html("Số người không được trống");
						$("#songuoi-dattour").addClass("invalid");
						$("#songuoi-dattour").focus();
					}
					else
					{
						if(diachi_dt == "")
						{
							$("#error-diachi-dattour").html("Địa chỉ không được trống");
							$("#diachi-dattour").addClass("invalid");
							$("#diachi-dattour").focus();
						}
					}
				}
			}
		}
	});

	$("#hoten-dattour").keypress(function(){
		$("#error-hoten-dattour").html("");
		$("#hoten-dattour").removeClass("invalid");
	});
	$("#email-dattour").keyup(function(){

		var email_dt= $("#email-dattour").val();
		var regmail=/^([\w\.])+@([a-zA-Z0-9\-])+\.([a-zA-Z]{2,4})(\.[a-zA-Z]{2,4})?$/;

		if(!regmail.test(email_dt))
		{
			$("#error-email-dattour").html("Email không hợp lệ");
			$("#email-dattour").addClass("invalid");
		}
		else
		{
			$("#error-email-dattour").html("");
			$("#email-dattour").removeClass("invalid");
		}
	});
	$("#sdt-dattour").keyup(function(){
		var regNumber = /^\d+$/;
		var sdt_dt= $("#sdt-dattour").val();

		if(!regNumber.test(sdt_dt))
		{
			$("#error-sdt-dattour").html("");
			$("#error-sdt-dattour").html("Số điện thoại không chứa kí tự");
			$("#sdt-dattour").addClass("invalid");
		}
		else
		{
			if(sdt_dt.length > 11)
			{
				$("#error-sdt-dattour").html("");
				$("#error-sdt-dattour").html("Số điện thoại không vượt quá 11 số");
				$("#sdt-dattour").addClass("invalid");
			}
			else
			{
				$("#error-sdt-dattour").html("");
				$("#sdt-dattour").removeClass("invalid");
			}
		}
	});
	$("#songuoi-dattour").keyup(function(){
		var songuoi_dt= $("#songuoi-dattour").val();
		var regNumber = /^\d+$/;

		if(!regNumber.test(songuoi_dt))
		{
			$("#error-songuoi-dattour").html("Số người không chứa ký tự");
			$("#songuoi-dattour").addClass("invalid");
		}
		else
		{
			if(songuoi_dt < 0 || songuoi_dt > 50)
			{
				$("#error-songuoi-dattour").html("Số người lớn hơn 0 và nhỏ hơn 50");
				$("#songuoi-dattour").addClass("invalid");
			}
			else
			{
				$("#error-songuoi-dattour").html("");
				$("#songuoi-dattour").removeClass("invalid");
			}
		}
	});
	$("#diachi-dattour").keypress(function(){
		$("#error-diachi-dattour").html("");
		$("#diachi-dattour").removeClass("invalid");
	});
});


// Tìm kiếm các tour
$(function(){
	$(window).load(function(){
		$("#search-result").hide();
	});
	$("#search-page").click(function(){
		$("#main").hide();
		$("#tour").hide();
		$("#search-result").show();
	});
});