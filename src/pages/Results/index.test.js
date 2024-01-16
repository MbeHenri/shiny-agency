import { formatJobList } from "./";

describe('fonction formatJobList', () => {

    const true_res = "tod";

    /* test('retire la virgule', () => {
        const title = "tod;";
        expect(formatJobList(title, 15, 8)).toEqual(true_res);

    }) */

    test('ne met pas de virgule', () => {
        expect(formatJobList(true_res, 15, 8)).toEqual(true_res);
    })


})