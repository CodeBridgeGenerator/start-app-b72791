
import { faker } from "@faker-js/faker";
export default (user,count,studentIDIds) => {
    let data = [];
    for (let i = 0; i < count; i++) {
        const fake = {
studentID: studentIDIds[i % studentIDIds.length],
studentName: faker.lorem.sentence(""),

updatedBy: user._id,
createdBy: user._id
        };
        data = [...data, fake];
    }
    return data;
};
