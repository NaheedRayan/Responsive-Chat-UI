const open_button = document.querySelector('.open_button')
const close_button = document.querySelector('.close_button')


// when the open button is clicked
open_button.addEventListener("click", () => {


    // const close_button = document.getElementById('close_button');
    // close_button.style['display'] ='flex';
    // close_button.style['visibility'] = 'visible';

    // const open_button = document.getElementById('open_button');
    // open_button.style['display'] ='none';
    // open_button.style['visibility'] = 'hidden';

    // we will render the blocks before the navbar width is set

    document.getElementById('Chat-Groups').style.display = 'block';
    document.getElementById('Chat-Groups').style.visibility = 'visible';

    document.getElementById('searchbox').style.display = 'block';
    document.getElementById('searchbox').style.visibility = 'visible';



    document.getElementById('room-name').style.display = 'none';
    document.getElementById('room-name').style.visibility = 'hidden';


    document.getElementById('message_input_form').style.display = 'none';

    const close_button = document.getElementById('close_button');
    close_button.style['display'] = 'flex';
    close_button.style['visibility'] = 'visible';

    const open_button = document.getElementById('open_button');
    open_button.style['display'] = 'none';
    open_button.style['visibility'] = 'hidden';

    const nav = document.getElementById('left-navbar');
    nav.style['width'] = '100%';

    // for rendering the groups list
    var link_text = document.querySelectorAll('.link-text');
    for (var i = 0; i < link_text.length; i++) {
        link_text[i].style.visibility = 'visible';
        link_text[i].style.display = 'block';
    }


})


close_button.addEventListener("click", () => {




    // we will render the blocks before the navbar width is set
    document.getElementById('Chat-Groups').style.display = 'none';
    document.getElementById('Chat-Groups').style.visibility = 'hidden';

    document.getElementById('searchbox').style.display = 'none';
    document.getElementById('searchbox').style.visibility = 'hidden';




    document.getElementById('room-name').style.display = 'flex';
    document.getElementById('room-name').style.visibility = 'visible';

    document.getElementById('message_input_form').style.display = 'block';
    document.getElementById('message_input_form').style.visibility = 'visible';


    const close_button = document.getElementById('close_button');
    close_button.style['display'] = 'none';
    close_button.style['visibility'] = 'hidden';



    const open_button = document.getElementById('open_button');
    open_button.style['display'] = 'flex';
    open_button.style['visibility'] = 'visible';


    const nav = document.getElementById('left-navbar');
    nav.style['width'] = '0%';


    // for rendering the groups list
    var link_text = document.querySelectorAll('.link-text');
    for (var i = 0; i < link_text.length; i++) {
        link_text[i].style.visibility = 'hidden';
        link_text[i].style.display = 'none';
    }



})



// if someone writes something we will receive the message and call the send_message event.
let message_input = document.getElementById('message_input');

// for stopping the default function of the submit button and emmiting it in
// the send_message event
document.getElementById('message_input_form').onsubmit = function (e) {
    e.preventDefault();
    let message = message_input.value.trim();
    if (message.length) {
        // creating a new node and appending innerHTML in the 'messages' div
        const newNode = document.createElement('div');
        // newNode.innerHTML = `<b>${data.username}</b> has joined the room`;

        newNode.innerHTML = `
        <div class='parent-container-right' id='parent-container-right'>
                <div class='username' id='username'><b>Naheed 11:28 AM</b></div>
                <div class="container darker">
                    <span>${message}</span>
                </div>
            </div>
        `;
        document.getElementById('messages').appendChild(newNode);
    }
    // reseting the input value
    message_input.value = '';
    message_input.focus();
    var scrollingElement = (document.scrollingElement || document.body);
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
}