var OxOb137=["inp_action","sel_Method","inp_name","inp_id","inp_encode","sel_target","Name","value","name","id","action","method","encoding","application/x-www-form-urlencoded","","target"];var inp_action=Window_GetElement(window,OxOb137[0],true);var sel_Method=Window_GetElement(window,OxOb137[1],true);var inp_name=Window_GetElement(window,OxOb137[2],true);var inp_id=Window_GetElement(window,OxOb137[3],true);var inp_encode=Window_GetElement(window,OxOb137[4],true);var sel_target=Window_GetElement(window,OxOb137[5],true);UpdateState=function UpdateState_Form(){} ;SyncToView=function SyncToView_Form(){if(element[OxOb137[6]]){inp_name[OxOb137[7]]=element[OxOb137[6]];} ;if(element[OxOb137[8]]){inp_name[OxOb137[7]]=element[OxOb137[8]];} ;inp_id[OxOb137[7]]=element[OxOb137[9]];if(element[OxOb137[10]]){inp_action[OxOb137[7]]=element[OxOb137[10]];} ;if(element[OxOb137[11]]){sel_Method[OxOb137[7]]=element[OxOb137[11]];} ;if(element[OxOb137[12]]==OxOb137[13]){inp_encode[OxOb137[7]]=OxOb137[14];} else {inp_encode[OxOb137[7]]=element[OxOb137[12]];} ;if(element[OxOb137[15]]){sel_target[OxOb137[7]]=element[OxOb137[15]];} ;} ;SyncTo=function SyncTo_Form(element){element[OxOb137[8]]=inp_name[OxOb137[7]];if(element[OxOb137[6]]){element[OxOb137[6]]=inp_name[OxOb137[7]];} else {if(element[OxOb137[8]]){element.removeAttribute(OxOb137[8],0);element[OxOb137[6]]=inp_name[OxOb137[7]];} else {element[OxOb137[6]]=inp_name[OxOb137[7]];} ;} ;element[OxOb137[9]]=inp_id[OxOb137[7]];element[OxOb137[10]]=inp_action[OxOb137[7]];element[OxOb137[11]]=sel_Method[OxOb137[7]];try{element[OxOb137[12]]=inp_encode[OxOb137[7]];} catch(e){} ;element[OxOb137[15]]=sel_target[OxOb137[7]];if(element[OxOb137[15]]==OxOb137[14]){element.removeAttribute(OxOb137[15]);} ;if(element[OxOb137[6]]==OxOb137[14]){element.removeAttribute(OxOb137[6]);} ;if(element[OxOb137[10]]==OxOb137[14]){element.removeAttribute(OxOb137[10]);} ;} ;