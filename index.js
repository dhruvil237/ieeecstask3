document.getElementById("button").addEventListener("click", function(event){
        event.preventDefault()
    });
const analyse = () =>
{
    var vo=0,co=0,di=0,sp=0,sc=0;
    var s=document.getElementById("input").value;
    document.getElementById("input").value="";
    document.getElementById("preview").textContent=s;
    for(var i=0;i<s.length;i++)
    {
        if(s.charCodeAt(i)===65 || s.charCodeAt(i)==97 || s.charCodeAt(i)===69 || s.charCodeAt(i)===101 || s.charCodeAt(i)===73 || s.charCodeAt(i)===105 || s.charCodeAt(i)===79 || s.charCodeAt(i)===111 || s.charCodeAt(i)===85 || s.charCodeAt(i)===117)
        {
            vo++;
        }
        else if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57)
        {
            di++;
        }
        else if( s.charCodeAt(i)===32)
        {
            sp++;
        } 
        else if( (s.charCodeAt(i)>=32 && s.charCodeAt(i)<=47) || ( s.charCodeAt(i)>=123 && s.charCodeAt(i)<=126) || ( s.charCodeAt(i)>=91 && s.charCodeAt(i)<=96) || (s.charCodeAt(i)>=58 && s.charCodeAt(i)<=64))
        {
            sc++;
        }        
        else
        {
            co++;
        }
    }
    document.getElementById("vowels").textContent=vo;
    document.getElementById("consonants").textContent=co;
    document.getElementById("digits").textContent=di;
    document.getElementById("spaces").textContent=sp;
    document.getElementById("special").textContent=sc;
    let t=vo+co+di
    let rper=(vo/t)*255
    let gper=(co/t)*255
    let bper=(di/t)*255
    const rgbtoHex=(rgb)=>{
        let hex=Number(rgb).toString(16)
        if(hex.length<2){
            hex='0'+hex
        }
        return hex
    }
    var r = rgbtoHex(parseInt(rper))
    var g = rgbtoHex(parseInt(gper))
    var b = rgbtoHex(parseInt(bper))
    document.body.style.backgroundColor="#"+r+g+b
}