import Courses from '../models/Course.js';
import { multipleMongooseToObject } from '../../util/mongoose.js';

class SiteController {
    index(req, res, next) {
        Courses.find({})
            .then((courses) => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

export default new SiteController();
