import firebase from 'firebase/compat'
import db from '../firebase/firebase'

function AddMessageWithImageToFirebaseCollection(input, username, downloadURL, userId) {
    db.collection('chat').add({
        message: input,
        username: username,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        img: downloadURL,
        userId: userId
    })
}

function AddMessageWithOtherFilesToFirebaseCollection(input, username, fileName, downloadURL, userId) {
    db.collection('chat').add({
        message: input,
        username: username,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        url: downloadURL,
        fileName: fileName,
        userId: userId
    })
}

function AddMessageWithNoFilesToFirebaseCollection(input, username, userId) {
    db.collection('chat').add({
        message: input,
        username: username,
        time: firebase.firestore.FieldValue.serverTimestamp(),
        userId: userId
    })
}

function AddPostWithGifToFirebaseCollection(input, userPicture, userName, downloadURL, fav, gif, userId) {
    db.collection('posts').add({    
        message: input,  
        timestamp: firebase.firestore.      
        FieldValue.serverTimestamp(),
        profilePic: userPicture,      
        username: userName,    
        image: downloadURL,    
        favourite: fav,  
        gif: gif,
        userId: userId            
    })
}

function AddPostWithImageToFirebaseCollection(input, userPicture, userName, downloadURL, fav, gif, userId) {
    db.collection('posts').add({            
        message: input,            
        timestamp: firebase.firestore.            
        FieldValue.serverTimestamp(),    
        profilePic: userPicture,      
        username: userName,        
        image: downloadURL,      
        favourite: fav,      
        gif: gif,
        userId: userId   
    })
}

function AddPostWithoutImageToFirebaseCollection(input, userPicture, userName, fav, gif, userId) {
    db.collection('posts').add({              
        message: input,              
        timestamp: firebase.firestore.              
        FieldValue.serverTimestamp(),              
        profilePic: userPicture,              
        username: userName,              
        favourite: fav,
        gif: gif,
        userId: userId    
  })
}
export default AddMessageWithImageToFirebaseCollection

export {AddMessageWithOtherFilesToFirebaseCollection, AddMessageWithNoFilesToFirebaseCollection, AddPostWithGifToFirebaseCollection, AddPostWithImageToFirebaseCollection, AddPostWithoutImageToFirebaseCollection}

