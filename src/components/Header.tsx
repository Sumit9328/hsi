"use client";

import React from "react";

export default function Header(): React.ReactElement {
	return (
		<header>
			<div className="upper-head clearfix">
				<div className="container">
					<div className="contact-info">
						<p><i className="flaticon-phone-call"></i> Phone: (011)-71573058</p>
						<p><i className="flaticon-mail"></i> Mail: info@holidayseason.co.in</p>
					</div>
					<div className="login-btn pull-right">
						<a href="/login.html"><i className="fa fa-user-plus"></i>Association of Tour Operators ( IATO )</a>
						<a href="/login.html"><i className="fa fa-user-plus"></i>Approved By (ASTA)</a>
					</div>
				</div>
			</div>
		</header>
	);
}



