$(function() {
		$.ajax({ //获取手机故障
		url: 'https://www.topfix.cn/repair-api/parts/queryserver',
		type: "POST",
		data: {
			PartsService: 266,
		},
		success: function(data) {
			console.log(data)
			$("#chooseFault").html(template("tpl1", {
				data: data
			}));
			$("#chooseFault>#selFault").click(function() {
				($(this).children('img').css("visibility") == "hidden") ? $(this).children('img').css('visibility', 'visible'): $(this).children('img').css('visibility', 'hidden');			    
			})
			$("#chooseFault>#selFault").eq(0).click();
		}
	});
$("#next").click(function() {	
		var moreFault = []; //故障数组
		var moreFaultid = [];
		var priceAll = 0; //总价
		$("#chooseFault>#selFault").each(function() {
			if ($(this).children('img').css("visibility") == "visible") {
				var prices = parseInt($(this).children('p').children('#price').html())
				priceAll += prices
				moreFault.push($(this).children('span').html())
				moreFaultid.push($(this).children('span').attr("data-partsId"))
				localStorage.setItem('model', "通用");
				localStorage.setItem('serviceid', 266);
				localStorage.setItem('priceAll', priceAll);
				localStorage.setItem('moreFault', JSON.stringify(moreFault));
				localStorage.setItem('moreFaultid', JSON.stringify(moreFaultid));
			}
		});
			location.href = "informationh.html";
	})
})