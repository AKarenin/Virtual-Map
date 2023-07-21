// Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTAHFJuOeZHZfVyRTeJOon_LbUWacnK1Q",
  authDomain: "dohyu-d8c16.firebaseapp.com",
  projectId: "dohyu-d8c16",
  storageBucket: "dohyu-d8c16.appspot.com",
  messagingSenderId: "71365629753",
  appId: "1:71365629753:web:e53ac431f1ee3fac4afae8",
  measurementId: "G-W3T9KRJLDP"
};

  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    // try {
    //     const docRef = await addDoc(collection(db, "data"), {
    //         temp: 'test'
    //     })
    // } catch(e) {
    //     console.error("Error adding document: ", e)
    // }

    export function openArea(areaType) {
            var curState = $('#image-area').css('display');
            $('#image-area').css({
                'display': 'block',
                'margin-top': '50px'
            })
            if(curState == 'none')
            {
                const element = document.querySelector('#image-area');

                element.addEventListener('animationend', () => {
                    $('#image-area').css('display', 'block');
                });
                element.classList.remove('animate__fadeOutUp');
                element.classList.add('animate__animated', 'animate__fadeInDown');
            }
            else if(curState == 'block')
            {
                const element = document.querySelector('#image-area');
                element.classList.remove('animate__fadeInDown');
                element.classList.add('animate__fadeIn');
                element.addEventListener('animationend', () => {
                    element.classList.remove('animate__fadeIn');
                });
            }
   
            
            if(areaType == 'Science') {
                $('#image-area-title').html('Science');
                $('#image-area-image').attr('src', 'https://resources.finalsite.net/images/f_auto,q_auto/v1616287963/seoulforeignorg/h023gg4yiieznqajxisf/colmbus.jpg')
            }
            else if(areaType == 'Math') {
                $('#image-area-title').html('Math')
                $('#image-area-image').attr('src', 'https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_6/v1654055871/seoulforeignorg/ycqwnwwvhxpiv6ui6qrd/IMG_-9742.jpg')
            }
        }

        export function hideArea() {
            const element = document.querySelector('#image-area');
            element.classList.remove('animate__fadeInDown');
            element.classList.add('animate__animated', 'animate__fadeOutUp');
            element.addEventListener('animationend', () => {
                $('#image-area').css('display', 'none');
            });
        }