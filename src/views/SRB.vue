<template>
    <div class="srb">
        <b-row>
            <b-col>
                <module-header 
                    name="SRB" 
                    :buttons="
                    [
                        {
                            label:'Edit Mode',
                            style:'danger',
                            visibleToAdmin: true,
                            onClick: toggleEditMode
                        },
                        {
                            label:'Create Floor',
                            style:'outline-success',
                            visibleToAdmin: true,
                            onClick: createFloor
                        },
                        {
                            label:'Remove Floor',
                            style:'outline-danger',
                            visibleToAdmin: true,
                            onClick: removeFloor
                        }
                    ]"
                />
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="8">
                <PinCanvas name="SRB FloorPlan" />
                <InfoBoard name="SRB Summary" />
            </b-col>
            <b-col cols="4">
                <ItemList name="SRB Bin List" />
            </b-col>
        </b-row>
        <div id="basic-modal" class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <div class="m-portlet__head-tools">
                            <ul class="m-portlet__nav">
                                <li class="m-portlet__nav-item m-dropdown m-dropdown--inline m-dropdown--arrow m-dropdown--align-right m-dropdown--align-push" m-dropdown-toggle="hover" aria-expanded="true">
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="modal-body">
                        <div class="m-scrollable" data-scrollbar-shown="true" data-scrollable="true">
                            <div class="row">
                                <div class="col-md-12 col-xl-12">
                                    <InfoTable name="SRB Device Details" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-xl-12">
                                    <LineChart name="SRB Timeline Chart" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import ModuleHeader from '@/components/ModuleHeader.vue'
import PinCanvas from '@/components/PinCanvas.vue'
import InfoBoard from '@/components/InfoBoard.vue'
import ItemList from '@/components/ItemList.vue'
import InfoTable from '@/components/InfoTable.vue'
import LineChart from '@/components/LineChart.vue'
export default {
  name: 'srb',
  components: {
    ModuleHeader,
    PinCanvas,
    InfoBoard,
    ItemList,
    InfoTable,
    LineChart
  },
  props: {
    msg: String
  },
  methods: {
    toggleEditMode(value){
      console.log("toggleEditMode here");
    },
    createFloor(value){
      console.log("create floor with name");
    },
    removeFloor(value){
      console.log("remove floor id");
    },
    sampleFunction(value){
      console.log("sample"+ value);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>