import Courses from '../models/Course.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

class MeController {
    storedCourses(req, res, next) {
        Courses.find({})
            .then((courses) =>
                res.render('me/stored-courses', {
                    courses: multipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

export default new MeController();
