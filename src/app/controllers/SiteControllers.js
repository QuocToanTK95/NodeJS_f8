import Courses from '../models/Course.js';

class SiteController {
    async index(req, res) {
        try {
            const courses = await Courses.find({});
            await res.json(courses);
        } catch (err) {
            res.status(400).json({ error: 'ERROR!!!' });
        }
    }
}

export default new SiteController();
