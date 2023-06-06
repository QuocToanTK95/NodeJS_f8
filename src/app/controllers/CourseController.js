import Courses from '../models/Course.js';
import { mongooseToObject } from '../../util/mongoose.js';

class CourseController {
    show(req, res, next) {
        Courses.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('courses/show', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }
}

export default new CourseController();
