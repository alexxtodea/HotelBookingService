<template>
  <div class="page">
  <html >
  <header class="container-header">
    <nav class="container-header-nav">
      <!-- <div>
    <img class="image" src="./assets/hotel.jpg"/>
  </div> -->
      <h1>welcome</h1>
      <div class="navbar-options">
      <button>Home</button>
      <button>About</button>
      <button>book</button>
    </div>
    </nav>
  </header>


  <p class="headers">our rooms:</p>
    <div v-for="room in rooms" v-bind:key="room.id" class="room">
      <RoomsComponent
        :id="room.id"
        :roomType="room.roomType"
        :description="room.description"
        :imageUrl="room.imageUrl"
        :bedAmount="room.bedAmount"
        :price="room.price"
        :roomNumber="room.roomNumber"
      />
    </div>
 
  </html>
</div>
</template>

<script>
import RoomsComponent from '../components/RoomsComponent.vue';


export default {
  name: 'Rooms',
  components: {
    RoomsComponent
    
},

  data() {
    return {
      rooms: [],
      error: null,
      
    }
  },
  methods: {
    getRooms() {
      

        fetch(`http://localhost:8002/rooms/getAll`)
        .then(response => {
            if(response.ok){
                return response.json()
            } else{
              console.log(response)
                alert("Server returned " + response.status + " : " + response.statusText);
            }
        })
        .then(response => {
            this.rooms = response;
        })
        .catch(err => {
            this.error = err;
        });
      },
  },

  created: function(){
    this.getRooms();
   
  }
}
</script>

<style scoped>
 .page{
  margin: 0%;
  background-color:#3d364d;
 }

 .container-header{
  margin: 0%;
  background-color:#000000;
  flex: space;
 }

.container-header-nav{
   /* background-color:	#6a545f;  */
   background-image: url("../assets/hotel.jpg");
  width: 100%;
  height: auto;
background-position: center;
   display:flex;
  color: #ffffff;
  font-size:50px;
  padding: 60px;
  margin-left: 30px;
  padding-left: 30px;
  text-transform: uppercase;
}

.headers{
  text-align: center;
  text-transform: uppercase;
  color: #f0d6c3;
}

.navbar-options{
  display: flex;
  padding: 10px;
  margin: 10px;
  
}
img{
  width: 150px;
}

button{ 
  padding: 20px;
  margin: 10px;
  opacity: 0.9;
  filter: alpha(opacity=90);
  background-color: rgba(27, 26, 26, 0.9); 
  border: transparent;
  border-radius: 10px;
  transition-duration: 0.4s;
}

button:hover{
  opacity: 0.3;
  background-color: rgba(61, 58, 58, 0.9); 
}


</style>