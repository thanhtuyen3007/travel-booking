import * as request from '~/untils/http';

export const getBestTour = async (page, perPage) => {
    try {
        const res = await request.get('/tour', {
            params: {
                // eslint-disable-next-line no-undef
                _page: page,
                _per_page: perPage,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error');
    }
};
