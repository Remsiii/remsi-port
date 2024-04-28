import { forwardRef, useId } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="59"
      height="32"
      viewBox="0 0 29 25"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 12.898438 4.703125 C 16.089844 4.78125 16.402344 4.804688 17.417969 5.074219 C 18.015625 5.234375 18.820312 5.542969 19.199219 5.757812 C 19.867188 6.136719 20.761719 6.925781 21.175781 7.503906 C 21.527344 7.988281 22.058594 9.203125 22.324219 10.132812 C 22.46875 10.625 22.554688 10.828125 22.519531 10.582031 C 22.410156 9.832031 21.925781 8.492188 21.507812 7.796875 C 20.640625 6.359375 19.320312 5.421875 17.433594 4.910156 C 16.632812 4.695312 16.222656 4.667969 13.007812 4.644531 L 9.464844 4.617188 L 12.898438 4.703125 M 8.40625 5.597656 C 8.375 5.691406 8.367188 6.054688 8.390625 6.410156 L 8.433594 7.054688 L 11.773438 7.027344 L 15.109375 7 L 11.824219 6.96875 L 8.535156 6.9375 L 8.5 6.183594 C 8.484375 5.769531 8.441406 5.507812 8.40625 5.597656 M 15.691406 7.132812 C 15.828125 7.160156 16.054688 7.160156 16.191406 7.132812 C 16.328125 7.105469 16.214844 7.085938 15.941406 7.085938 C 15.667969 7.085938 15.554688 7.105469 15.691406 7.132812 M 16.636719 7.242188 C 16.742188 7.273438 16.890625 7.269531 16.96875 7.238281 C 17.042969 7.207031 16.953125 7.1875 16.769531 7.1875 C 16.589844 7.191406 16.527344 7.214844 16.636719 7.242188 M 17.742188 7.542969 C 19.554688 8.316406 20.144531 9.519531 20.386719 12.925781 C 20.59375 15.863281 20.269531 18.8125 19.597656 20.148438 C 19.097656 21.132812 18.117188 21.835938 16.769531 22.164062 C 16.421875 22.25 14.785156 22.320312 12.316406 22.359375 L 8.414062 22.421875 L 8.414062 24.875 L 12.425781 24.824219 C 15.699219 24.785156 16.550781 24.746094 17.046875 24.597656 C 17.699219 24.402344 17.449219 24.410156 16.21875 24.628906 C 15.851562 24.691406 13.96875 24.746094 12.035156 24.746094 L 8.515625 24.746094 L 8.546875 23.652344 L 8.578125 22.5625 L 12.566406 22.496094 C 15.660156 22.445312 16.671875 22.394531 17.101562 22.261719 C 19.714844 21.460938 20.585938 19.515625 20.585938 14.5 C 20.585938 9.941406 19.640625 7.757812 17.492188 7.34375 C 17.195312 7.285156 17.257812 7.332031 17.742188 7.542969 M 22.660156 11.867188 C 22.695312 12.332031 22.742188 12.730469 22.761719 12.753906 C 22.839844 12.84375 22.792969 11.925781 22.695312 11.476562 C 22.625 11.144531 22.613281 11.246094 22.660156 11.867188 M 22.847656 14.667969 C 22.847656 15.621094 22.867188 16.011719 22.886719 15.535156 C 22.90625 15.058594 22.90625 14.277344 22.886719 13.800781 C 22.867188 13.324219 22.847656 13.714844 22.847656 14.667969 M 22.710938 16.851562 C 22.699219 17.097656 22.667969 17.5 22.640625 17.746094 L 22.585938 18.195312 L 22.699219 17.746094 C 22.761719 17.5 22.796875 17.097656 22.773438 16.851562 L 22.730469 16.402344 L 22.710938 16.851562 M 22.335938 19.0625 C 22.019531 20.382812 21.417969 21.535156 20.425781 22.710938 C 20.300781 22.855469 19.832031 23.222656 19.378906 23.523438 C 18.414062 24.167969 18.429688 24.257812 19.40625 23.660156 C 20.589844 22.933594 21.53125 21.746094 22.074219 20.289062 C 22.394531 19.421875 22.625 18.539062 22.566406 18.375 C 22.546875 18.3125 22.441406 18.621094 22.335938 19.0625 M 17.988281 24.246094 C 17.710938 24.378906 17.703125 24.394531 17.933594 24.339844 C 18.246094 24.261719 18.601562 24.078125 18.433594 24.082031 C 18.371094 24.082031 18.171875 24.15625 17.988281 24.246094 "/>
<path d="M 8.792969 4.96875 C 8.753906 5.132812 8.675781 5.261719 8.621094 5.261719 C 8.570312 5.261719 8.523438 5.632812 8.523438 6.089844 L 8.523438 6.914062 L 12.371094 6.972656 C 16.511719 7.039062 17.328125 7.132812 18.386719 7.675781 C 19.902344 8.453125 20.585938 10.574219 20.585938 14.5 C 20.585938 19.515625 19.714844 21.460938 17.101562 22.261719 C 16.671875 22.394531 15.660156 22.445312 12.566406 22.496094 L 8.578125 22.5625 L 8.546875 23.664062 L 8.515625 24.761719 L 12.476562 24.710938 C 16.539062 24.65625 16.964844 24.613281 18.25 24.140625 C 18.820312 23.929688 20.109375 23.082031 20.425781 22.710938 C 22.167969 20.648438 22.808594 18.449219 22.800781 14.53125 C 22.796875 12.027344 22.4375 10.019531 21.714844 8.492188 C 21.300781 7.621094 21.125 7.375 20.433594 6.6875 C 19.6875 5.945312 18.703125 5.417969 17.417969 5.074219 C 16.371094 4.792969 16.183594 4.78125 12.597656 4.730469 L 8.867188 4.679688 L 8.792969 4.96875 "/>

        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});
