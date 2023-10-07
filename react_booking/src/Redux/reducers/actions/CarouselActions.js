
import axios from "axios";
import { DOMAIN } from "../../../utils/settings/config";
import { SET_CAROUSEL } from "./type/CarouselType";

export const getCarouselAction = async (dispatch) => {
    try {
        const result = await axios({
            url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
            method: 'GET'
        });

        dispatch({
            type: SET_CAROUSEL,
            arrImg: result.data.content
        })
    } catch (errors) {
        console.log('errors', errors)
    }
};
