<template>
    <div class="srb">
        <b-row>
            <b-col>
                <h3>{{ module_name }}</h3>
                <b-button-group>
                    <b-button variant="danger" v-on:click="toggleEditMode">Edit Mode: ON</b-button>
                    <b-button v-if="edit_mode" variant="outline-success" v-on:click="createArea">Create Area</b-button>
                    <b-button v-if="edit_mode" variant="outline-danger" v-on:click="removeArea">Remove Area</b-button>
                </b-button-group>
                <b-dropdown right text="Select Area" variant="outline-primary">
                    <b-dropdown-item v-for="area in api.areas" :key="area.id" v-on:click="selectArea(area.id)">{{ area.id }}</b-dropdown-item>
                </b-dropdown>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="8">
                <PinCanvas name="SRB FloorPlan" />
                <info-table name="SRB Summary" />
                <b-table hover 
                    :items=api.rubbish_bins
                />
            </b-col>
            <b-col cols="4">
                <item-list name="SRB Bin List"
                    :items=api.rubbish_bins
                     @onClickedItem="showBinDetails"
                />
            </b-col>
        </b-row>
        <b-modal id="modal1" ref="myModalRef" title="BootstrapVue">
            <b-col cols="6">
                <info-table name="SRB Info Table"/>
            </b-col>
            <b-col cols="6">
                <img src="" />
            </b-col>
            <b-col cols="12">
            </b-col>
        </b-modal>
    </div>
</template>
<script>
// @ is an alias to /src
import PinCanvas from '@/components/PinCanvas.vue'
import InfoBoard from '@/components/InfoBoard.vue'
import ItemList from '@/components/ItemList.vue'
import InfoTable from '@/components/InfoTable.vue'
import LineChart from '@/components/LineChart.vue'
import {SRB_APIService} from '@/services/SRB_APIService';
const apiService = new SRB_APIService('https://jsonplaceholder.typicode.com');
export default {
  name: 'srb',
  components: {
    PinCanvas,
    InfoBoard,
    ItemList,
    InfoTable,
    LineChart
  },
  props: {
    msg: String
  },
    data: function() {
        return  {
            edit_mode: false,
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
            },
            
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
        this.$refs.myModalRef.show()
    }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>