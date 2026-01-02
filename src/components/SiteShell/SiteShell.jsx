export function SiteShell({children}) {
  const styles = {
    shell : {
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        gap: "20px",
    },
  };

    return (
        <div style={styles.shell}>
            {children}
        </div>
    );
  };