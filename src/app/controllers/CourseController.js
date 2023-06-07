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

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Courses(formData);
        course
            .save()
            .then(() => res.redirect('/'))
            .catch(next);
    }
}

export default new CourseController();
