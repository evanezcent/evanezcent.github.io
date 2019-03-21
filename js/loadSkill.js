$(document).ready(function(){

    var skil = (data) => {
        return '<span class="label_progress font-weight-bold">' + data.nama + '</span>' +
            '<div class="progress">'+
            '<div class="progress-bar bg-dark progress-bar-striped progress-bar-animated" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="'+data.persen+'" style="width:'+data.persen+'%">' +
             + data.persen +
            '%</div>' +
            '</div>';
    }

    $.ajax({
        type: "GET",
        url: "js/skills.json",
        dataType : "json",
        success : function(skillData){
            $.each(skillData.skills, function(index, obj){
                $("#mySkills").append(skil(obj));
            });
        }
    });
});