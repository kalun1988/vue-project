<template>
    <div class="srb">
        <vs-row>
            <vs-col>
                <h3>{{ module_name }}</h3>
                    <vs-button color="danger" type="filled" v-on:click="toggleEditMode">Edit Mode: ON</vs-button>
                    <vs-button v-if="edit_mode" color="success" type="border" v-on:click="createArea">Create Area</vs-button>
                    <vs-button v-if="edit_mode" color="danger" type="border" v-on:click="removeArea">Remove Area</vs-button>
                <b-dropdown right text="Select Area" variant="outline-primary">
                    <b-dropdown-item v-for="area in api.areas" :key="area.id" v-on:click="selectArea(area.id)">{{ area.id }}</b-dropdown-item>
                </b-dropdown>
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-w="8">
                <PinCanvas 
                    name="SRB FloorPlan"
                    image="http://ec2-52-77-106-230.ap-southeast-1.compute.amazonaws.com/iot_platform/media/floor_plan_img/evacdiagdone_RE4dqOe.jpg" 
                />
                <b-table stacked 
                    :items="[
                        {
                            'No. of Bin': api.rubbish_bins.length,
                            'Avg. Usage': 100/api.rubbish_bins.length + '%'
                        }
                    ]"
                />
            </vs-col>
            <vs-col vs-w="4">
                <item-list name="SRB Bin List"
                    :items=api.rubbish_bins
                     @onClickedItem="showBinDetails"
                />
            </vs-col>
        </vs-row>
        <vs-popup fullscreen title="fullscreen" :active.sync="popupActivo4">
            
        <vs-row>
            <vs-col vs-w="6">
                <b-table hover 
                    :items=api.rubbish_bins
                />
            </vs-col>
            <vs-col vs-w="6">
                <img src="" />
            </vs-col>
        </vs-row>
        <vs-row>
            <vs-col vs-w="12">
                <line-chart 
                    name="SRB Line Chart"
                />
            </vs-col>
        </vs-row>

        </vs-popup>
    </div>
</template>
<script>
// @ is an alias to /src
import PinCanvas from '@/components/PinCanvas.vue'
import ItemList from '@/components/ItemList.vue'
import LineChart from '@/components/LineChart.vue'
import {SRB_APIService} from '@/services/SRB_APIService';
const apiService = new SRB_APIService('https://jsonplaceholder.typicode.com');
export default {
  name: 'srb',
  components: {
    PinCanvas,
    ItemList,
    LineChart
  },
  props: {
    msg: String
  },
    data: function() {
        return  {
            edit_mode: true,
            popupActivo4:false,
            module_name:"SRB",
            api:{
                rubbish_bins:[
                    {
                        id: '4487b376-8249-4266-8e92-d3565afbd287',
                        label: 'Dummy Bin 1',
                        preview: '-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1',
                        preview_label: '24H',
                        usage_level: 0
                    },
                    {
                        id: '88c7ef9c-e90b-415f-8dea-77ac29c69092',
                        label: 'Dummy Bin 2',
                        preview: '-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1',
                        preview_label: '24H',
                        usage_level: 0
                    }
                ],
                areas:[]
            }
            
        }
    },
  mounted: function(){
    apiService.getAreas()
        .then((response) => {
            console.log(response.results);
            var response = JSON.parse(`{"count":1,"next":null,"previous":null,"results":[{"id":"ac4823d2","label":"abc"},{"id":"zzdfe","label":"def"}]}`);
            this.api.areas = response.results;
            return apiService.getAreas();
        })
        .then((response) => {
            console.log("next call");
            console.log(response.results);
        });
  },
  methods: {
    toggleEditMode(value){
        console.log("toggleEditMode here");
    },
    createArea(value){
      console.log("create area with name");
    },
    removeArea(value){
      console.log("remove area id");
    },
    selectArea(area_id){
      console.log(`selected area:${area_id}`);
    },
    showBinDetails(bin_id, index){
        console.log("show modal content" + bin_id + "index:"+ index);
        this.popupActivo4=true;
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>