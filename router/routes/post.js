const express = require('express')

const router = express.Router()

const POST = [{
    text: '콩나물 불고기',
    content: '연탄공',
},
]

router.get('/', (req,res) => {
    const postCounts = POST.length
    res.render('post', {POST, postCounts})
})

// router.get('/post/:text', (req,res) => {
//     const postData = POST.find((textel) => textel.text === req.params.text)
//     if (postData) return res.send(postData)
//     else {
//         const err = new Error('해당 내용를 가진 TEXT가 없습니다.')
//         err.statusCode = 404
//         throw err
//     } 
// })

router.post('/add', (req,res) => {
        // if (req.query.text && req.query.content) {
        //     const newPOST = {
        //         text: req.query.text,
        //         content: req.query.content,
        //     }
        //     POST.push(newPOST)
        //     res.redirect('/post')
        // } 
        // else if (req.body) {
        //     if (req.body.text && req.body.content) {
        //         const newPOST = {
        //             text: req.body.text,
        //             content: req.body.content,
        //         }
        //         POST.push(newPOST)
        //         res.redirect('/post')
        //     } else {
        //         // err가 발생한지점에서 newError를 통해 err 객체를 만들어 throw로 전달
        //         const err = new Error('form태그 입력을 확인하세요')
        //         err.statusCode = 400
        //         throw err
        //     }
        // }
        // else {
        //     // err가 발생한지점에서 newError를 통해 err 객체를 만들어 throw로 전달
        //     const err = new Error('form태그 입력을 확인하세요')
        //     err.statusCode = 400
        //     throw err
        // }

        if(Object.keys(req.body).length >= 1) {
            if (req.body.title && req.body.content) {
                const newPost = {
                    title: req.body.title,
                    content: req.body.content,
                }
                POST.push(newPost)
                res.redirect('/post')
            } else {
                const err = new Error('form태그 입력을 확인하세요')
                err.statusCode = 400
                throw err
            }
        } else {
            const err = new Error('데이터가 입력되지 않았습니다.')
            err.statusCode = 400
            throw err
        }
})

module.exports = router