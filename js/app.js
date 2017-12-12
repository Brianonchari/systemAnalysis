
//dev cost personell
function devCostpersonell () {
	var systemAnalyst = document.getElementById('system-Analysts-Number').value * document.getElementById('system-Analysts-Time').value *document.getElementById('system-Analysts-Cost').value;
	var programmerAnalyst = document.getElementById('programmer-Analysts-Number').value*document.getElementById('programmer-Analysts-Time').value*document.getElementById('programmer-Analysts-Cost').value;
	var GuiDesigner=document.getElementById('GUI-Designers-Number').value*document.getElementById('GUI-Designers-Time').value*document.getElementById('GUI-Designers-Cost').value;
	var telecomSpecialist=document.getElementById('telecomm-Specialists-Number').value*document.getElementById('"telecomm-Specialists-Time').value*document.getElementById('"telecomm-Specialists-Cost').value;
	var systemArchitect=document.getElementById('system-Architects-Number').value*document.getElementById('system-Architects-Time').value*document.getElementById('system-Architects-Cost').value;
	var databasespecialist=document.getElementById('database-Specialists-Number').value*document.getElementById('database-Specialists-Time').value*document.getElementById('database-Specialists-Cost').value;
	var systemLibrarians=document.getElementById('system-Librarians-Number').value*document.getElementById('system-Librarians-Time').value*document.getElementById('system-Librarians-Cost').value;

	$.ajax({
		type: "post",
		url: "../php/devCostpersonell.php",
		data: systemAnalyst,
		cache: false,
		success: function (html){
			$('#msg').html(html);
		}
	});

	return false;
}

//dev cost training
function devCostTraining (){
	var oracletrainingregistration = document.getElementById('oracle-Training-Number').value*document.getElementById('oracle-Training-Time').value*document.getElementById('oracle-Training-Cost').value;
}
//dev cost hardeware and software
function devCosthardeware(){
	var devserver = document.getElementById('development-Server-Number').value*document.getElementById('development-Server-Time').value*document.getElementById('development-Server-Cost').value;
	var sever_software= document.getElementById('server-Software-Number').value*document.getElementById('server-Software-Time').value*document.getElementById('server-Software-Cost').value;
	var dbms_server_software= document.getElementById('DBMSserver-Software-Number').value*document.getElementById('DBMSserver-Software-Time').value*document.getElementById('DBMSserver-Software-Cost').value;
	var dbms_client_software = document.getElementById('client-Software-Number').value*document.getElementById('client-Software-Time').value*document.getElementById('client-Software-Cost').value;
}//anuall operating costs personell
function anuallOppcostpersonel(){
	var programmerAnalyst= document.getElementById('programmer-Analyst-Number').value*document.getElementById('programmer-Analysts-Time').value*document.getElementById('programmer-Analysts-Cost').value;
	var systemLibrarian= document.getElementById('system-Librarian-Number').value*document.getElementById('system-Librarian-Time').value*document.getElementById('system-Librarian-Cost').value;
}
//anual operating cost hardware,software and misc
function anuallOppCostHardware(){
	var server_maintenance = document.getElementById('maintainance-Agreement-Number').value*document.getElementById('maintainance-Agreement-Cost').value;
	var maintainance_Agreement = document.getElementById('maintainance-Agreement-Number').value*document.getElementById('maintainance-Agreement-Cost').value;
var dbms_software=document.getElementById('DBMS-Software-Cost').value;
var printed_forms=document.getElementById('preprinted-Forms-Number').value*document.getElementById('preprinted-Forms-Cost');

}