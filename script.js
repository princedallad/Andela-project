document.getElementById("details").style.display="none";

var newAdd = document.getElementById('newAdd');

//   //add event listener


  
      var details= document.getElementById("details");
      var add= document.getElementById("add");
      var cancel= document.getElementById("cancel");

      var contact=document.getElementById("contact")

        newAdd.addEventListener('click', function(event) {
        	console.log('add button clicked');
   document.getElementById("details").style.display="block";
   document.getElementById("msg").style.display="none";
 	 document.getElementById("contactPage").style.display="none";
  });
  cancel.addEventListener('click', function(event) {
   document.getElementById("details").style.display="none";
  });





var contactList=[];
 	contactList.name=[]; contactList.address=[];contactList.number=[];
 
 contact.addEventListener('click',function(){
 	document.getElementById("details").style.display="none";
 	 document.getElementById("contactPage").style.display="block";
 	 document.getElementById("msg").style.display="none";
 	var nameList=contactList.name;
 	var addressList=contactList.address;
 	var numberList=contactList.number;
 	document.getElementById('nameList').innerHTML=nameList;
 	document.getElementById('addressList').innerHTML=addressList;
 	document.getElementById('numberList').innerHTML=numberList;
 })


  add.addEventListener('click', function(){
document.getElementById("msg").style.display="block";
  	var name= document.getElementById("name").value;
    var address= document.getElementById("address").value;
      var number= document.getElementById("number").value;
  	

if (name!="" && address!="" && number!=""){
	contactList.name.push(name); contactList.address.push(address); contactList.number.push(number);
 		var msg=addToBook(name,address,number);
 		document.getElementById("msg").innerHTML=msg;
 		document.getElementById('name').value="";
 		document.getElementById('address').value="";
 		document.getElementById('number').value="";

 	}else{
 		if (name==""){
 			alert('name field missing');
 		}else if (address==""){
 				alert('address field missing');
 		}else{
 				alert('number field missing');
 		}
 	
 	}
  })
  	
  
 function addToBook(Name,Address,PhoneNumber){
 	return 'Successfully Registered. These are your details: Name:'+Name+' Address:'+Address+' Phone:'+PhoneNumber;
 }
 	

 	// console.log(isEmpty)
 	