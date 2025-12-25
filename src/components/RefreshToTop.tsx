// on every refresh refresh to top

const RefreshToTop = () => {
  return (
    <script>{`
      window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    `}</script>
  );
};

export default RefreshToTop;
