

document.addEventListener('DOMContentLoaded',function(event) {
    const apiUrl = 'http://fetch-message-in-the-bottle.herokuapp.com/api/v2/messages'
    const userName = 'JasonD'
    const tweetsContainer = document.getElementById('tweets-container')
    const newTweetForm = document.getElementById('new-tweet-form')
    const newTweetInputField = document.getElementById('new-tweet-text')

    newTweetForm.addEventListener('submit',function(event) {
        event.preventDefault()
        const tweetBody = newTweetInputField.value
        persistTweetAndAddToDOM(tweetBody)
    })

    tweetsContainer.addEventListener('click',function(event) {
        if (event.target.tagName == 'LI') {
            const tweetId = event.target.dataset.tweetId
            const tweetOwner = event.target.dataset.tweetUserName
            handleDeleteTweet(tweetId,tweetOwner)
        }
    })

    function handleDeleteTweet(tweetId,tweetOwner) {
        if (tweetOwner === userName) {
            //destroyTweetObjFromServer(tweetId).then(() => removeDeletedTweetFromDom(tweetId))
            destroyTweetObjFromServer(tweetId).then(fetchTweets)
        } else {
            alert(`Hey ${userName}! Delete your own tweets!!`)
        }

    }

    function removeDeletedTweetFromDom(tweetId) {
        const tweetDomObj = document.querySelector(`li[data-tweet-id='${tweetId}']`)
        tweetDomObj.remove()
    }

    function destroyTweetObjFromServer(tweetId) {
        const deleteUrl = `${apiUrl}/${tweetId}`
       return fetch(deleteUrl,{method:'DELETE'})
    }

    function persistTweetAndAddToDOM(tweetBody) {
        persistTweet(tweetBody).then(generateTweetHTML).then(clearNewTweetInput)
    }

    function clearNewTweetInput() {
        newTweetInputField.value = ''
    }

    function fetchTweets() {
        fetch(apiUrl).then(r=>r.json()).then(generateTweetsHTML) //sames as .then(data=>generateTweetsHTML(data))
    }

    function persistTweet(tweetMessage) {
        const body = {
            message:{
                real_name: userName,
                message:tweetMessage
            }
        }
        const config = {
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Data-type':'application/json'
            },
            body:JSON.stringify(body)
        }
        return fetch(apiUrl,config).then(r=>r.json())
    }

    function generateTweetsHTML(tweetsObjs) {
        tweetsContainer.innerHTML = ''
        tweetsObjs.forEach( generateTweetHTML )
    }

    function generateTweetHTML(tweetObj) {
        console.log(tweetObj)
        //const tweetDomObj  = document.createElement('LI')
        // tweetDomObj.innerText = tweetObj.message
        // tweetDomObj.dataset.tweetId = tweetObj.id
        // tweetDomObj.dataset.tweetUserName = tweetObj.real_name
        const tweetHTML = `<li data-tweet-id='${tweetObj.id}' data-tweet-user-name='${tweetObj.real_name}'>${tweetObj.message}</li>`
        appendTweetToDom(tweetHTML)
        //appendTweetDomObjToDOm(tweetDomObj)
    }

    function appendTweetToDom(tweetHTML) {
        const oneStringToRuleThemALl = `${tweetHTML}${tweetsContainer.innerHTML}`
        console.log(oneStringToRuleThemALl)
        tweetsContainer.innerHTML = oneStringToRuleThemALl
    }

    // function appendTweetDomObjToDOm(tweeDomObj) {
    //     tweetsContainer.appendChild(tweeDomObj)
    // }

    // Create request (post) tweet
    // 1. static form DONE
    // 2. reference to static form DONE
    // 3. add event listener on submit DONE
    // 4. find input field (must have id) DONE
   // 5. post to create new tweet (create config obj, post) (DONE)

   // Handle tweet post response (post)
   // 1. handle response async (meaning chain to the promise)
   // 2. call fn to add tweetObj to DOM

   // pessimistic vs optimistic rendering

    function startApp() {
        fetchTweets()
    }

    startApp()
})