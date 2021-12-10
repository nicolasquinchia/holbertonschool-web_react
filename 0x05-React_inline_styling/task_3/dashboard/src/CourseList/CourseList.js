import React from 'react';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


function CourseList({listCourses}) {
    return (
        <table id="CourseList" className={css(styles.CourseListStyle)}>
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true} />
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {
                    listCourses.length === 0 && (
                        <CourseListRow textFirstCell="No course available yet" isHeader={false} />
                    )
                }
                {
                    listCourses && listCourses.map((course) => (
                        <CourseListRow
                            key={course.id}
                            textFirstCell={course.name}
                            textSecondCell={course.credit}
                            isHeader={false}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}

const styles = StyleSheet.create({
    CourseListStyle: {
        border: '2px solid lightgray',
        margin: '50px auto',
        width: '90%'
    }
})

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
    listCourses: []
}

export default CourseList;