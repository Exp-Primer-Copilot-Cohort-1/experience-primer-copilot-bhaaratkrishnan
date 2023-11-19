function skillsMember() {
    var member = document.getElementById("member");
    var memberPath = document.getElementById("memberPath");
    if (member.checked == true) {
        memberPath.style.display = "block";
    } else {
        memberPath.style.display = "none";
    }
}