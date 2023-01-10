import { LightningElement } from 'lwc';
export default class Rest_Callount_From_LWC extends LightningElement {
    randomJoke;
    clickHandler(){
        const callountURL="https://icanhazdadjoke.com";
        fetch(callountURL,{
            method:"GET",
            headers:{
                Accept:"application/json"
            }
        })
        .then(response=>{
            if(response.ok){
                return response.json();
            }
        })
        .then(responseJSON=>{
            console.log(responseJSON);
            this.randomJoke = responseJSON.joke;
        })
    }

}