var coursesApi = "http://localhost:3000/courses";
function start() {
  getCourses(renderCourses);
  handleCreateForm();
//   console.log('first')
  
}
start();
function getCourses(callback) {
  fetch(coursesApi)
    .then(function (res) {
      return res.json();
    })
    .then(callback)
    .catch(() => {
      console.log("call api lỗi");
    });
}
function createCourse(data){
    fetch(coursesApi,{
        method:'POST',
        body: JSON.stringify(data)
    })
        .then(function(res){
            

        })
        .catch(function(){
            console.log('Call API POST lỗi')
        })

}
function renderCourses(courses) {
  var listCoursesBlock = document.querySelector("#list-courses");
  var htmls = courses.map(function (course) {
    return `
    <li>
        <h1>${course.name}</h1>
        <p>${course.description}</p>
    </li>
    
    `
    ;
  });
//   console.log(htmls.join(''))
  listCoursesBlock.innerHTML= htmls.join('');
}
function handleCreateForm(){
     var createBtn = document.querySelector('#create');
    //  console.log(createBtn)
    createBtn.onclick = function(e){
        console.log(e.target.id)
        var name= document.querySelector('input[name="name"]').value;
        console.log(name)
        var description= document.querySelector('input[name="description"]').value;
        console.log(description)
    }
}