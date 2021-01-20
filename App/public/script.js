
function getRandomColor() {
        var letters = 'BCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * letters.length)];
        }
        return color;
    }
    let createNote = document.querySelectorAll('.createNote, .createNote input, .createNote textarea')
    let createNoteColor= getRandomColor()
for(let i=0; i<createNote.length; i++){
    createNote[i].style.backgroundColor = createNoteColor;//Create form color
}
     document.querySelector('.addNote').addEventListener('click',()=>{
        createNote[0].style.display = 'flex';
    }) 

document.querySelectorAll('.Note').forEach(item =>{
    
    var modify = {
        form: item,
        inputTitle : item.querySelector('input[name = "inputTitle'),
        titleOldContent: item.querySelector('.titleContent'),
        title: false,
        deleteBtn: item.querySelector('form a'),
        checkBtn: item.querySelector('.exitBtn'),
        inputPost: item.querySelector('textarea[name = "inputPost"]'), 
        postOldContent: item.querySelector('.postContent'),
        post: false
                };
       
                //coloe
                modify.form.style.backgroundColor = getRandomColor();
                modify.inputTitle.style.backgroundColor = modify.form.style.backgroundColor
                modify.inputPost.style.backgroundColor = modify.form.style.backgroundColor

                function checked(){
                    modify.deleteBtn.href = "#" 
                    modify.checkBtn.addEventListener('mouseover',()=>{
                    modify.checkBtn.classList.add('check')
                                })
                    modify.checkBtn.addEventListener('click',()=>{
                    modify.form.submit()
                                })
                }
                modify.inputPost.value = modify.postOldContent.innerText    //save old content
                modify.inputTitle.value = modify.titleOldContent.innerText 
    
        //title
        modify.titleOldContent.addEventListener('dblclick',()=>{//editar o titulo
            modify.title = true
            let titleOldtext = modify.titleOldContent.innerText
            modify.titleOldContent.innerText = ''            
           
            modify.inputTitle.style.display = 'block'
            modify.inputTitle.value = titleOldtext

            
            if(modify.title == true){
                checked()          
                }
          
        })

        //content 
        modify.postOldContent.addEventListener('dblclick',()=>{//editar o titulo
            modify.post = true
            let postOldtext = modify.postOldContent.innerText
            modify.postOldContent.innerText = ''            
           
            modify.inputPost.style.display = 'block'
            modify.inputPost.value = postOldtext

            
            if(modify.post == true){
                checked()          
                }
           
        })
})

 