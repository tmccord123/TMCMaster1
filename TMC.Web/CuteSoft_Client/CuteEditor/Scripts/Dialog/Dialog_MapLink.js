var OxOd92c=["inp_src","inp_title","inp_target","sel_protocol","btnbrowse","editor","","href","value","title","target","onclick","length","options","://",":","others","selectedIndex"];var inp_src=Window_GetElement(window,OxOd92c[0],true);var inp_title=Window_GetElement(window,OxOd92c[1],true);var inp_target=Window_GetElement(window,OxOd92c[2],true);var sel_protocol=Window_GetElement(window,OxOd92c[3],true);var btnbrowse=Window_GetElement(window,OxOd92c[4],true);var obj=Window_GetDialogArguments(window);var editor=obj[OxOd92c[5]];SyncToView();function SyncToView(){var src=obj[OxOd92c[7]].replace(/$\s*/,OxOd92c[6]);Update_sel_protocol(src);inp_src[OxOd92c[8]]=src;if(obj[OxOd92c[9]]){inp_title[OxOd92c[8]]=obj[OxOd92c[9]];} ;if(obj[OxOd92c[10]]){inp_target[OxOd92c[8]]=obj[OxOd92c[10]];} ;} ;btnbrowse[OxOd92c[11]]=function btnbrowse_onclick(){function Ox35c(Ox13e){if(Ox13e){inp_src[OxOd92c[8]]=Ox13e;} ;} ;editor.SetNextDialogWindow(window);if(Browser_IsSafari()){editor.ShowSelectFileDialog(Ox35c,inp_src.value,inp_src);} else {editor.ShowSelectFileDialog(Ox35c,inp_src.value);} ;} ;function sel_protocol_change(){var src=inp_src[OxOd92c[8]].replace(/$\s*/,OxOd92c[6]);for(var i=0;i<sel_protocol[OxOd92c[13]][OxOd92c[12]];i++){var Ox142=sel_protocol[OxOd92c[13]][i][OxOd92c[8]];if(src.substr(0,Ox142.length).toLowerCase()==Ox142){src=src.substr(Ox142.length,src[OxOd92c[12]]-Ox142[OxOd92c[12]]);break ;} ;} ;var Ox447=src.indexOf(OxOd92c[14]);if(Ox447!=-1){src=src.substr(Ox447+3,src[OxOd92c[12]]-3-Ox447);} ;var Ox447=src.indexOf(OxOd92c[15]);if(Ox447!=-1){src=src.substr(Ox447+1,src[OxOd92c[12]]-1-Ox447);} ;var Ox448=sel_protocol[OxOd92c[8]];if(Ox448==OxOd92c[16]){Ox448=OxOd92c[6];} ;inp_src[OxOd92c[8]]=Ox448+src;} ;function Update_sel_protocol(src){var Ox44a=false;for(var i=0;i<sel_protocol[OxOd92c[13]][OxOd92c[12]];i++){var Ox142=sel_protocol[OxOd92c[13]][i][OxOd92c[8]];if(src.substr(0,Ox142.length).toLowerCase()==Ox142){if(sel_protocol[OxOd92c[17]]!=i){sel_protocol[OxOd92c[17]]=i;} ;Ox44a=true;break ;} ;} ;if(!Ox44a){sel_protocol[OxOd92c[17]]=sel_protocol[OxOd92c[13]][OxOd92c[12]]-1;} ;} ;function insert_link(){var arr= new Array();arr[0]=inp_src[OxOd92c[8]];if(inp_target[OxOd92c[8]]){arr[1]=inp_target[OxOd92c[8]];} ;if(inp_title[OxOd92c[8]]){arr[2]=inp_title[OxOd92c[8]];} ;Window_SetDialogReturnValue(window,arr);Window_CloseDialog(window);} ;