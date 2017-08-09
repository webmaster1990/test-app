import {get} from 'axios';
import React, {PureComponent} from "react";
import ListView from '../Components/ListView';

import {
	Row,
	Col,
} from "react-bootstrap";
const API_URL = `https://books.zoho.com/api/v3/contacts`;


class home extends PureComponent {
	constructor() {
		super();
		this.state = {
			contactList: []
		}
	}

	async componentWillMount() {
		try {
			const contact = await this.getData();
			this.setState({contactList: contact});
		} catch (er) {
			console.log(er);
		}
	}

	async getData() {
		const data = {
			headers: {
				"Authorization": "e0004d01c7fa98354ecf7258d8e70672",
				"organization_id": 649199458
			}
		};
		try {
			const response = await get(`${API_URL}`, data);
			return response.data.contacts;
		} catch (er) {
			console.log(er);
		}
	}

	render() {
		const { contactList } = this.state;
		const cols = [
			{ key: 'contact_name', text: 'Name' },
			{ key: 'company_name', text: 'COMPANY NAME' },
			{ key: 'email', text: 'EMAIL' },
			{ key: 'phone', text: 'WORK PHONE' },
			{ key: 'gst_treatment', text: 'GST TREATMENT' },
			{ key: 'outstanding_receivable_amount', text: 'RECEIVABLE' },
			{ key: 'outstanding_payable_amount', text: 'PAYABLE' }
		];
		const rows = contactList;
		return (
			<Row style={{ marginTop: 25 }}>
				<Col lg={12} xs={12}>
					<ListView cols={cols} rows={rows} />
				</Col>
			</Row>
		);
	}
}


export default home;

