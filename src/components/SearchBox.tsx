"use client";

import React from "react";

export default function SearchBox(): React.ReactElement {
	return (
		<div className="search-box clearfix">
			<div className="container">
				<div className="search-outer">
					<div className="search-content">
						<form>
							<div className="row align-items-center">
								<div className="col-lg-3 col-md-12">
									<div className="search-title d-flex align-items-center justify-content-between">
										<p>Find Your <span>Holiday</span></p>
										<i className="flaticon-sun-umbrella"></i>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="row table_item">
										<div className="col-lg-12 mb-3">
											<div className="form-group">
												<select className="wide">
													<option value="0">Destination</option>
													<option value="1">0</option>
													<option value="2">1</option>
													<option value="3">2</option>
													<option value="4">3</option>
													<option value="5">4</option>
												</select>

												<i className="flaticon-maps-and-flags"></i>
											</div>
										</div>
										<div className="col-lg-12">
											<div className="form-group form-icon">
												<select className="wide">
													<option value="0">Type</option>
													<option value="1">0</option>
													<option value="2">1</option>
													<option value="3">2</option>
													<option value="4">3</option>
													<option value="5">4</option>
												</select>
												<i className="flaticon-box"></i>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-6">
									<div className="table_item">
										<div className="form-group mb-3">
											<div className="input-group date" id="datetimepicker1">
												<input type="text" className="form-control" defaultValue="dd-mm-yyyy" />
												<i className="flaticon-calendar"></i>
												<span className="input-group-addon">
													<i className="fa fa-calendar" aria-hidden="true"></i>
												</span>
											</div>
										</div>
										<div className="form-group form-icon">
											<div className="input-group date" id="datetimepicker2">
												<input type="text" className="form-control" defaultValue="dd-mm-yyyy" />
												<i className="flaticon-calendar"></i>
												<span className="input-group-addon">
													<i className="fa fa-calendar" aria-hidden="true"></i>
												</span>
											</div>
										</div>
									</div>
								</div>
								<div className="col-lg-3 col-md-12">
									<div className="table_item table-item-slider">
										<div className="range-slider mt-0">
											<p className="text-start mb-2">Price Range</p>
											<div data-min="0" data-max="2000" data-unit="$" data-min-name="min_price" data-max-name="max_price" className="range-slider-ui ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all" aria-disabled="false">
												<span className="min-value">0 $</span>
												<span className="max-value">20000 $</span>
												<div className="ui-slider-range ui-widget-header ui-corner-all full" style={{ left: "0%", width: "100%" }}></div>
											</div>
											<div className="clearfix"></div>
										</div>
										<div className="search">
											<a href="#" className="btn-blue btn-red">SEARCH</a>
										</div>
									</div>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}


