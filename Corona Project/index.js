function updateMap() {

    fetch('/data.json')
        .then(response => response.json())
        .then(res => {
            console.log(res.data);//In data.json the entire info is stored in array named data, hence we did res.data
            res.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                
                cases=element.infected;
                if(cases>255){
                    color="rgb(255,0,0)"
                }
                else {
                    color=`rgb(${cases},0,0)`
                }

                new mapboxgl.Marker({
                    draggable: false,
                    color:color
                   
                })
                    .setLngLat([longitude,latitude])
                    .addTo(map);

            });


        })

}
updateMap();

pk.eyJ1IjoiY29kZXJzMjAyMCIsImEiOiJja2Z1czlrOG8xNHI2MnFwZHU3cGV5ZjJ2In0.JJbStAPJtj_N_Gb0qp2ZAQ