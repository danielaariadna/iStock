import React from 'react'
import msjIcon from "./buttons/iconMsj.png"

export default function ImageContainer({image,id}) {
  return (
        <a href={"image"+id} style={{"text-decoration": "none"}}>
        <div style={{"border": "1px solid","color":"#A8B2B1"}}>
            <div style={{"height": "180px","width": "240px","background-color":"#E8EDED"}}>
                <img src={image} style={{"width":" 90%","height":" 90%","object-fit":" contain","margin-top":"6px"}}/>
            </div>
            <div style={{"height":"64px","width":"240px","background-color":"#A8B2B1","color":"#E8EDED","font-size":"12px"}}>
                <div style={{"display":"flex","justify-content":"space-between"}}>
                    <p>Signature</p>
                    <p>{'#'+id}</p>
                </div>
                <div style={{"display":"flex","justify-content":"space-between"}}>   
                    <button style={{"padding":"0","background":"none"}}><img src={msjIcon} style={{"width":"12px","height":"12px"}}/></button>
                    <input type="checkbox" id="topping" name="topping" value="Paneer" />
                </div>
                
            </div>
        </div>
        </a>
  );
}
