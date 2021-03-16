
export default function showDetails(){

    return `
    <div class="modal fade" id="showDetails" tabindex="-1" aria-labelledby="showDetails" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
        
            <div class="modal-header">
                
            </div>
            <div class="modal-body">
                    
            <div class="row">
                <div class="col-sm-3 d-flex justify-content-center">
                <h2>24h</h2>    
                </div>

                <div class="col-sm-9">
                    <div class="row" id="detail_other">

                    </div>
                </div>
            </div>
                
            
                <div id="detail_chart"> </div>

            </div>
            <div class="modal-footer">
            
            <button type="submit" class="btn" style="background-color:#6930c3; color:#80ffdb;" id="folowCoin" ><i class="fas fa-plus-circle"></i></button>
            </div>
    </div>
</div>
`;
}
