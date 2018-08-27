const koa = require('koa')
const koaBody = require('koa-body')
const Router = require('koa-router')
const koaStatic = require('koa-static')
const router = new Router()
const config = require('./config')
const path = require('path')
const fs = require('fs')

const app = new koa()

app.use(koaStatic(path.join(__dirname, 'public'),{extensions:true}))

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const sequelize = new Sequelize(config.dbName, config.dbUsername, config.dbPassword, {
    host: config.dbHost,
    dialect: config.dbType
});
// dbName: 'amy',
// dbUsername: 'root',
// dbPassword: 'root',
// dbHost: '10.3.100.200',
// dbType: 'mysql'
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

const LiveBlocks = sequelize.define('live_block', {
    id:{type: Sequelize.BIGINT, primaryKey: true},
    x:{type: Sequelize.BIGINT},
    y:{type: Sequelize.BIGINT},
    width:{type: Sequelize.BIGINT},
    height:{type: Sequelize.BIGINT},
    title:{type: Sequelize.STRING},
    bgcolor:{type: Sequelize.STRING},
    bgimgs:{type: Sequelize.STRING},
    urls:{type: Sequelize.STRING},
    dataApi:{type: Sequelize.STRING}
});






async function getLiveBlocks(){
    return new Promise((resolve, reject)=>{
        LiveBlocks.findAll({
            where: {
                title: {
                    [Op.not]: null
                }
            }
        }).then(data=>{
            // console.log(data)
            resolve(data)
        }, (err)=>{
            // console.log(err)
            reject(err)
        }).catch((er)=>{
            console.log('err', er)
        })
    })
}
async function setLiveBlock(data){
    return new Promise((resolve, reject)=>{
        LiveBlocks.create(JSON.parse(data)).then(()=>{
            resolve()
        },(err)=>{
            reject(err)
        })
    })
}

// app.use(koaBody())
app.use(koaBody({ multipart: true }))
router.get('/LiveBlocks', async (ctx,next) => {
    try{
        // console.log(ctx.request)
        let data = await getLiveBlocks()
        if(data)
            data.forEach((o)=>{o.bgimgs = o.bgimgs ? config.protocal + ctx.request.header.host + o.bgimgs: ''})
        ctx.response.status = 200
        ctx.response.body =JSON.stringify(data)
    }
    catch (err) {
        ctx.response.status = 500
        ctx.response.body = '获取失败！'+JSON.stringify(err)
    }
    next()
})

app.use(router.routes()).use(router.allowedMethods());
// app.use((ctx, next) => {
//     ctx.res.setHeader("access-control-allow-origin","*")
//     next()
// })
app.listen(config.listenPort)