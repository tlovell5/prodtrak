function PreviousReportsSidebar({ reports }) {
    return (
        <div>
            {reports.map((report, idx) => (
                <div key={idx}>
                    {/* Display report details or a link to view the complete report */}
                </div>
            ))}
        </div>
    );
}
