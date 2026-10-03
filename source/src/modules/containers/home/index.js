import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import RenderContext from '@components/common/elements/RenderContext';
import apiConfig from '@constants/apiConfig';
import useFetch from '@hooks/useFetch';
import HomePageDesktop from '@modules/layout/desktop/home';
import HomePageMobile from '@modules/layout/mobile/home';
import { cartActions } from '@store/actions';
import {
    adaptCourses,
    adaptInstructors,
    adaptPartners,
    adaptPublicSettings,
    defaultTestimonials,
} from '@utils/ilearningAdapters';
import { toast } from 'sonner';

const HomePageContainer = () => {
    const dispatch = useDispatch();

    // 1. Gọi API lấy cấu hình banner/slider & video showcase
    const { data: rawSettings } = useFetch(apiConfig.setting.getPublic, {
        immediate: true,
    });
    const settings = useMemo(() => adaptPublicSettings(rawSettings), [ rawSettings ]);

    // 2. Gọi API lấy danh sách khóa học
    const { data: rawCourses, loading: coursesLoading } = useFetch(apiConfig.classRoom.getPublicList, {
        immediate: true,
    });
    const courses = useMemo(() => adaptCourses(rawCourses), [ rawCourses ]);

    // 3. Gọi API lấy danh sách đối tác doanh nghiệp
    const { data: rawPartners } = useFetch(apiConfig.company.getPublicList, {
        immediate: true,
    });
    const partners = useMemo(() => adaptPartners(rawPartners), [ rawPartners ]);

    // 4. Gọi API lấy danh sách giảng viên
    const { data: rawInstructors } = useFetch(apiConfig.mentor.getPublicList, {
        immediate: true,
    });
    const instructors = useMemo(() => adaptInstructors(rawInstructors), [ rawInstructors ]);

    // 5. Logic xử lý thao tác nút bấm (Nghiệp vụ thêm giỏ hàng)
    const handleAddToCart = useCallback(
        (course) => {
            if (!course) return;
            dispatch(
                cartActions.addToCart({
                    id: course.id,
                    title: course.title,
                    price: course.price,
                    numericPrice: course.numericPrice,
                    thumbnail: course.thumbnail,
                }),
            );
            toast.success(`Đã thêm "${course.title}" vào giỏ hàng!`);
        },
        [ dispatch ],
    );

    // 6. Truyền toàn bộ dữ liệu và hàm xử lý xuống giao diện qua RenderContext
    return (
        <RenderContext
            components={{
                desktop: { defaultTheme: HomePageDesktop },
                mobile: { defaultTheme: HomePageMobile },
            }}
            settings={settings}
            courses={courses}
            coursesLoading={coursesLoading}
            partners={partners}
            instructors={instructors}
            testimonials={defaultTestimonials}
            onAddToCart={handleAddToCart}
        />
    );
};

export default HomePageContainer;
