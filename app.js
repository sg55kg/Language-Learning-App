import mongoose from "mongoose"
import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import decksRouter from './routes/api/v1/deckRoutes/deckRoutes.js'
import dotenv from 'dotenv'
import cors from "cors";
import userDecksRouter from "./routes/api/v1/userDeckRoutes/userDeckRoutes.js";
import userRouter from "./routes/api/v1/users/userRoutes.js";

dotenv.config()

const mongodb = process.env.MONGODB_URL

const PORT = process.env.PORT || 5000


const app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/api/v1/decks', decksRouter)
app.use('/api/v1/userDecks', userDecksRouter)
app.use('/api/v1/users', userRouter)

app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.json('Error')
// });

app.listen(PORT, async () => {
  console.log(`Server running on port: ${PORT}`)
  await mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
})


