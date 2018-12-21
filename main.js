console.log('External file........................');

/*document.onreadystatechange = function(){
   if(document.readyState === 'complete'){
   }
}*/


/*document.onload = function() {

}*/

window.addEventListener("load", function(){
  console.log('skuid:', skuid);
  console.log('models:', skuid.model.map());
  
  var models = skuid.model.map(),
  teamMemberViewModel = models.TeamMember_view || {},
  teamMemberViewData = teamMemberViewModel.data || [];

  if (teamMemberViewData.length > 0)
    console.log('teamMemberViewData:', teamMemberViewData);
  else
    console.log('teamMemberViewModel:', teamMemberViewModel);
});
