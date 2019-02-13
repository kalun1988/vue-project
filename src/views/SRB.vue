<template>
    <div class="srb">
        <div class="page-container">
            <ModuleHeader name="SRB" />
            <div class="m-content">
                <div class="row">
                    <div class="col-md-8 col-xl-8">
                        <PinCanvas name="SRB FloorPlan" />
                        <InfoBoard name="SRB Summary" />
                    </div>
                    <div class="col-md-4 col-xl-4">
                        <ItemList name="SRB Bin List" />
                    </div>
                </div>
            </div>
        </div>
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
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>